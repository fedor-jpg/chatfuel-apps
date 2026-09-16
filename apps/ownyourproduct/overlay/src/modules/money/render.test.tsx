import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { ToastProvider } from "~ui";
import { createTestClient } from "../testClient";
import { MoneyApp } from "./MoneyApp";

/** The white-screen guard: no auth context renders the sign-in notice, not a crash. */
describe("Dinero renders", () => {
  it("draws the header and the sign-in notice", () => {
    const html = renderToStaticMarkup(
      <ToastProvider>
        <MoneyApp botId="bot-1" client={createTestClient()} view="" setView={() => undefined} params={new URLSearchParams()} setParams={() => undefined} navigate={() => undefined} />
      </ToastProvider>,
    );
    expect(html).toContain("Dinero");
    expect(html).toContain("Inicia sesión");
  });
});
