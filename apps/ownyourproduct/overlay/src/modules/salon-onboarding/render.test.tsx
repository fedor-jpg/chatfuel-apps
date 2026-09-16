import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { ToastProvider } from "~ui";
import { createTestClient } from "../testClient";
import { SalonOnboardingApp } from "./SalonOnboardingApp";

/** The white-screen guard: the first step renders with no data and no storage. */
describe("Preparar renders", () => {
  it("draws the business step", () => {
    const html = renderToStaticMarkup(
      <ToastProvider>
        <SalonOnboardingApp botId="bot-1" client={createTestClient()} view="" setView={() => undefined} params={new URLSearchParams()} setParams={() => undefined} navigate={() => undefined} />
      </ToastProvider>,
    );
    expect(html).toContain("Tu negocio");
    expect(html).toContain("Continuar");
  });
});
