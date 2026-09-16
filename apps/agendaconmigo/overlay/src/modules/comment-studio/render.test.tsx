import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { ToastProvider } from "~ui";
import { createTestClient } from "../testClient";
import { CommentStudioApp } from "./CommentStudioApp";

/** The white-screen guard: the frame renders before any data arrives. */
describe("Comment Studio renders", () => {
  it("draws its header and loading state without data", () => {
    const html = renderToStaticMarkup(
      <ToastProvider>
        <CommentStudioApp
          botId="bot-1"
          client={createTestClient()}
          view=""
          setView={() => undefined}
          params={new URLSearchParams()}
          setParams={() => undefined}
          navigate={() => undefined}
        />
      </ToastProvider>,
    );
    expect(html).toContain("Comment Studio");
    expect(html).toContain("Leyendo tu bot");
  });
});
