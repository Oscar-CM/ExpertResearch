"use client";

import React, { useEffect, useCallback } from "react";
import { useUser } from "@clerk/nextjs";
import axios from "axios";

const Provider = ({ }) => {
    const { user } = useUser();

    const checkIsNewUser = useCallback(async () => {
        try {
            const result = await axios.post('/api/user', { user });
            console.log(result.data);
        } catch (error) {
            console.error("Error checking new user:", error);
        }
    }, [user]);

    useEffect(() => {
        if (user) {
            checkIsNewUser();
        }
    }, [user, checkIsNewUser]);

    return (
        <div>
            
        </div>
    );
};

export default Provider;
