/// <reference types="vite/client" />
//
// AI BOOKING IS A PAID ADD-ON. The base plan is Comment Studio: a fixed public
// reply and one fixed Direct, no AI at send time. The AI assistant that keeps
// the conversation going and books the appointment stays in the code, reachable
// only when a deployment turns it on:
//
//   VITE_AI_BOOKING_AVAILABLE=true
//
// Anything else — unset, "false", a typo — is off. A flag that fails open would
// hand a free salon a metered AI conversation it never agreed to pay for.

export function parseAiBookingFlag(value: unknown): boolean {
  return typeof value === "string" && value.trim().toLowerCase() === "true";
}

export const AI_BOOKING_AVAILABLE: boolean = parseAiBookingFlag(
  import.meta.env.VITE_AI_BOOKING_AVAILABLE,
);

/**
 * The last line behind every screen that can start the AI mode: with the
 * add-on off, a "full" write is refused whatever path reached it. Screens only
 * offer it behind the flag; this makes an accidental path fail closed.
 */
export function aiBookingWriteAllowed(
  mode: "full" | "lite" | null,
  available: boolean = AI_BOOKING_AVAILABLE,
): boolean {
  return mode !== "full" || available;
}
