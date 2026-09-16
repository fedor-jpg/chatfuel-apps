import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { ToastProvider } from "~ui";
import { AuthContext, type AuthContextValue } from "../auth/AuthContext";
import { createTestClient } from "../testClient";
import { EquipoApp } from "./EquipoApp";

const props = { botId: "bot-1", client: createTestClient(), view: "", setView: () => undefined, params: new URLSearchParams(), setParams: () => undefined, navigate: () => undefined };

/** The white-screen guard: a manager sees the frame, a specialist the notice, nobody sees a crash. */
describe("Equipo renders", () => {
  it("shows the sign-in notice without an auth context", () => {
    const html = renderToStaticMarkup(<ToastProvider><EquipoApp {...props} /></ToastProvider>);
    expect(html).toContain("Accesos del equipo");
  });
  it("tells a specialist that only managers administer access", () => {
    const value = {
      state: { kind: "signedIn", user: { id: "u1", email: "a@b.c", name: null, avatarUrl: null }, epoch: 1, membership: { role: "member", joinedAt: "2026-09-15", tenant: { id: "t1", name: "Salon", bots: [] } }, membershipStatus: "ready" },
      adapter: {}, actions: {}, navigate: () => undefined, appName: "Test",
    } as unknown as AuthContextValue;
    const html = renderToStaticMarkup(<ToastProvider><AuthContext.Provider value={value}><EquipoApp {...props} /></AuthContext.Provider></ToastProvider>);
    expect(html).toContain("Solo una gerente");
  });
});
