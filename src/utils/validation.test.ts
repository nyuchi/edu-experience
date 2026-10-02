import { describe, expect, it } from "vite-plus/test";
import { sanitizeInput } from "./validation";

describe("sanitizeInput", () => {
  it("trims surrounding whitespace", () => {
    expect(sanitizeInput("  hello  ")).toBe("hello");
  });

  it("leaves plain text unchanged", () => {
    expect(sanitizeInput("Grade 7 maths, room 12")).toBe(
      "Grade 7 maths, room 12",
    );
  });

  it("escapes every HTML-significant character", () => {
    expect(sanitizeInput(`& < > " '`)).toBe("&amp; &lt; &gt; &quot; &#39;");
  });

  it("escapes ampersands first, so existing entities are not decoded", () => {
    expect(sanitizeInput("&lt;b&gt;")).toBe("&amp;lt;b&amp;gt;");
  });

  it.each([
    "<script>alert(1)</script>",
    "<script>alert(1)</script >",
    "<scr<script>ipt>alert(1)</script>",
    "<img src=x onerror=alert(1)>",
    '"><svg onload=alert(1)>',
  ])("leaves no markup in %s", (payload) => {
    const out = sanitizeInput(payload);
    expect(out).not.toMatch(/[<>"']/);
  });
});
