import { Schema } from 'mongoose';
import * as profile from '../../types/profileEnums';

export interface IProfile extends Document {
    complete: boolean;
    firstName: string;
    lastName: string;
    gender: string;
    genderPref: string[];
    age: number;
    height: number;
    city?: string;
    race: string[];
    year: string;
    college: string;
    major?: string;
    commitment: string;
    relationshipType: string;
    agePref: {
        youngest: number;
        oldest: number;
    };
    activities: string[];
    greenFlag: string;
    guiltyPleasure: string;
    bio?: string;
    religion?: string[];
}

export const profileSchema: Schema = new Schema<IProfile>(
    {
        complete: { type: Boolean, default: false },
        firstName: { type: String, trim: true, required: true },
        lastName: { type: String, trim: true, required: true },
        gender: { type: String, enum: profile.gender, required: true },
        genderPref: [{ type: String, enum: profile.genderPref, required: true }],
        age: { type: Number, min: 17, max: 40, required: true },
        height: { type: Number, min: 55, max: 78, required: true },
        city: { type: String },
        race: [{ type: String, enum: profile.race, required: true }],
        year: { type: String, enum: profile.classYear, required: true },
        college: { type: String, enum: profile.college },
        major: { type: String },
        commitment: { type: String, enum: profile.commitment, required: true },
        relationshipType: { type: String, enum: profile.relationshipType, required: true },
        agePref: {
            youngest: { type: Number, min: 17, max: 40, required: true },
            oldest: { type: Number, min: 17, max: 40, required: true },
        },
        activities: [{ type: String, enum: profile.activities, required: true }],
        greenFlag: { type: String },
        guiltyPleasure: { type: String },
        bio: { type: String, required: true },
        religion: [{ type: String, enum: profile.religion, required: true }],
    },
    { _id: false },
);