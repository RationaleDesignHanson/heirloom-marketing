import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import SupportDoc, { meta } from "@/content/policy/support.mdx";

export const metadata: Metadata = {
  title: `${meta.title} — Heirloom Recipe Box`,
  description: meta.description,
};

export default function SupportPage() {
  return (
    <LegalPage title={meta.title}>
      <SupportDoc />
    </LegalPage>
  );
}

