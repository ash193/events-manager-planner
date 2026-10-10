"use client";
import { createAuthClient } from "@neondatabase/auth";

export const authClient = createAuthClient(
  `${process.env.NEXT_PUBLIC_APP_URL}/api/auth`,
);
