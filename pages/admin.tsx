import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

export default function AdminPanel() {
    const { data: session, status } = useSession();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        if (status === 'authenticated') {
            fetchUsers();
        }
    }, [status]);

    const fetchUsers = async () => {
        try {
            const response = await fetch('/api/users');
            if (!response.ok) {
                throw new Error(response.status === 401 ? 'Unauthorized' : 'Failed to fetch users');
            }
            const data = await response.json();
            setUsers(data);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };


    const usersForSearch = users;

    const filteredUsers = (usersForSearch as any[]).filter(user =>
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (user.profile?.firstName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (user.profile?.lastName || '').toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Profile Modal Component
    const ProfileModal = ({ user, onClose }: { user: any; onClose: () => void }) => {
        if (!user) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                    <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
                        <h2 className="text-xl text-black font-semibold">User Profile</h2>
                        <button
                            onClick={onClose}
                            className="p-2  text-black hover:bg-gray-100 rounded-full"
                        >
                            ✕
                        </button>
                    </div>
                    <div className="p-6 space-y-6 text-black">
                        {/* Basic Info */}
                        <div>
                            <h3 className="text-lg font-medium mb-4">Basic Information</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-black-500">Name</p>
                                    <p>{user.profile?.firstName} {user.profile?.lastName}</p>
                                </div>
                                <div>
                                    <p className="text-black-500">Email</p>
                                    <p>{user.email}</p>
                                </div>
                                <div>
                                    <p className="text-black-500">Opt In Status</p>
                                    <p>{user.optIn ? "Opted In" : "Not Opted In"}</p>
                                </div>
                                <div>
                                    <p className="text-black-500">Profile Status</p>
                                    <p>{user.profile?.complete ? "Complete" : "Incomplete"}</p>
                                </div>
                            </div>
                        </div>

                        {user.profile?.complete && (
                            <>
                                {/* Profile Details */}
                                <div>
                                    <h3 className="text-lg font-medium mb-4">Profile Details</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-black-500">Gender</p>
                                            <p>{user.profile.gender}</p>
                                        </div>
                                        <div>
                                            <p className="text-black-500">Gender Preference</p>
                                            <p>{user.profile.genderPref}</p>
                                        </div>
                                        <div>
                                            <p className="text-black-500">Age</p>
                                            <p>{user.profile.age}</p>
                                        </div>
                                        <div>
                                            <p className="text-black-500">Height</p>
                                            <p>{Math.floor(user.profile.height / 12)} {user.profile.height % 12} </p>
                                        </div>
                                        <div>
                                            <p className="text-black-500">Location</p>
                                            <p>{user.profile.city}</p>
                                        </div>
                                        <div>
                                            <p className="text-black-500">Year</p>
                                            <p>{user.profile.year}</p>
                                        </div>
                                        <div>
                                            <p className="text-black-500">College</p>
                                            <p>{user.profile.college}</p>
                                        </div>
                                        <div>
                                            <p className="text-black-500">Major</p>
                                            <p>{user.profile.major}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Preferences */}
                                <div>
                                    <h3 className="text-lg font-medium mb-4">Preferences</h3>
                                    <div className="grid grid-cols-2 gap-4">

                                        <div>
                                            <p className="text-black-500">Age Preference</p>
                                            <p>{user.profile.agePref.youngest} - {user.profile.agePref.oldest} years</p>
                                        </div>
                                        <div>
                                            <p className="text-black-500">Commitment Level</p>
                                            <p>{user.profile.commitment}</p>
                                        </div>
                                        <div>
                                            <p className="text-black-500">Relationship Type</p>
                                            <p>{user.profile.relationshipType}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <div>
                                    <h3 className="text-lg font-medium mb-4">Personal Description</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-black-500">Self Description</p>
                                            <p>{Object.values(user.profile.describeYourself).join(", ")}</p>
                                        </div>
                                        <div>
                                            <p className="text-black-500">Partner Description</p>
                                            <p>{Object.values(user.profile.describePartner).join(", ")}</p>
                                        </div>
                                        <div>
                                            <p className="text-black-500">Bio</p>
                                            <p>{user.profile.bio}</p>
                                        </div>
                                    </div>
                                </div>

                                {user.survey?.complete && (
                                    <div>
                                        <h3 className="text-lg font-medium mb-4">Survey Information</h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-black-500">Interests</p>
                                                <p>{user.survey.interests.join(", ")}</p>
                                            </div>
                                            <div>
                                                <p className="text-black-500">Music Preferences</p>
                                                <p>{user.survey.music.join(", ")}</p>
                                            </div>
                                            <div>
                                                <p className="text-black-500">Love Languages</p>
                                                <p>{user.survey.lovelanguage.join(", ")}</p>
                                            </div>
                                            <div>
                                                <p className="text-black-500">Habits</p>
                                                <div className="text-sm">
                                                    <p>Drinking: {user.survey.habits.drinking}</p>
                                                    <p>Smoking: {user.survey.habits.smoking}</p>
                                                    <p>Weed: {user.survey.habits.weed}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    // Main component render
    if (status === 'unauthenticated') {
        return (
            <div className="min-h-screen bg-gray-50 p-4">
                <div className="bg-red-50 text-red-700 p-4 rounded-lg">
                    Not authorized
                </div>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 p-4">
                <div className="bg-red-50 text-red-700 p-4 rounded-lg">
                    {error}
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm">
                <div className="border-b border-gray-200 px-6 py-4">
                    <h1 className="text-xl font-medium text-gray-900">
                        Users ({users.length})
                    </h1>
                </div>

                <div className="p-6">
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Search users..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        />
                    </div>

                    <div className="space-y-2">
                        {filteredUsers.length === 0 ? (
                            <div className="text-center py-4 text-black">
                                No users found
                            </div>
                        ) : (
                            filteredUsers.map((user, index) => (
                                <div
                                    key={index}
                                    className="px-4 py-3 text-black rounded-lg border border-black hover:bg-gray-50 transition-colors cursor-pointer"
                                    onClick={() => setSelectedUser(user)}
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                        <div className="font-medium">
                                            {user.profile?.firstName || ''} {user.profile?.lastName || ''}
                                            {user.profile?.complete &&
                                                <span className="ml-2 text-green-600 text-sm">✓ Complete</span>
                                            }
                                        </div>
                                        <div className="text-gray-600">{user.email}</div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            {selectedUser && (
                <ProfileModal
                    user={selectedUser}
                    onClose={() => setSelectedUser(null)}
                />
            )}
        </div>
    );
}