import React, { useState, useEffect } from "react";
import {
    useFloating,
    offset,
    flip,
    shift,
    autoUpdate,
} from "@floating-ui/react";
import { set } from "mongoose";

interface PopupProps {
    triggerRef: React.RefObject<HTMLElement>;
    children: React.ReactNode;
    open: boolean;
    placement?: "top" | "bottom" | "left" | "right";
}

const Popup: React.FC<PopupProps> = ({ triggerRef, children, open, placement = "bottom" }) => {
    const {
        x,
        y,
        strategy,
        update,
        refs: { reference, floating, setReference, setFloating }
    } = useFloating({
        placement,
        middleware: [offset(5), flip(), shift()],
    });

    useEffect(() => {
        if (open && triggerRef.current && floating.current) {
            return autoUpdate(triggerRef.current, floating.current, update);
        }
    }, [open, triggerRef, floating, update]);

    useEffect(() => {
        if (triggerRef.current) {
            setReference(triggerRef.current);
        }
    }, [triggerRef, setReference]);

    return (
        <>
            {open && (
                <div
                    ref={setFloating}
                    style={{
                        position: strategy,
                        top: y ?? 0,
                        left: x ?? 0,
                        background: "white",
                        border: "1px solid #ccc",
                        padding: "8px",
                        borderRadius: "4px",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                    }}
                >
                    {children}
                </div>
            )}
        </>
    );
};

export default Popup;