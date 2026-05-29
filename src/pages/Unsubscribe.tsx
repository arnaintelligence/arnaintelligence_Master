import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type State =
  | { kind: "validating" }
  | { kind: "valid" }
  | { kind: "already" }
  | { kind: "invalid" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [state, setState] = useState<State>({ kind: "validating" });

  useEffect(() => {
    if (!token) {
      setState({ kind: "invalid" });
      return;
    }
    (async () => {
      try {
        const res = await fetch(
          `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`,
          { headers: { apikey: SUPABASE_ANON_KEY } }
        );
        const data = await res.json();
        if (res.ok && data.valid) setState({ kind: "valid" });
        else if (data.reason === "already_unsubscribed") setState({ kind: "already" });
        else setState({ kind: "invalid" });
      } catch {
        setState({ kind: "invalid" });
      }
    })();
  }, [token]);

  const confirm = async () => {
    if (!token) return;
    setState({ kind: "submitting" });
    try {
      const { data, error } = await supabase.functions.invoke(
        "handle-email-unsubscribe",
        { body: { token } }
      );
      if (error) throw error;
      if (data?.success) setState({ kind: "success" });
      else if (data?.reason === "already_unsubscribed") setState({ kind: "already" });
      else setState({ kind: "error", message: "Unable to process unsubscribe." });
    } catch (e: any) {
      setState({ kind: "error", message: e?.message ?? "Unexpected error" });
    }
  };

  return (
    <Layout>
      <section className="min-h-[60vh] flex items-center justify-center px-4 py-24" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-md w-full bg-white rounded-2xl border border-slate-200 p-8 text-center shadow-sm">
          <h1 className="text-2xl font-bold mb-3" style={{ color: "#0F172A" }}>
            Email preferences
          </h1>
          {state.kind === "validating" && (
            <p className="text-slate-600 flex items-center justify-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" /> Verifying your request…
            </p>
          )}
          {state.kind === "valid" && (
            <>
              <p className="text-slate-600 mb-6">
                Click below to unsubscribe from Arnas notification emails.
              </p>
              <Button onClick={confirm} className="bg-[#0D9488] hover:bg-[#0f766e] text-white">
                Confirm unsubscribe
              </Button>
            </>
          )}
          {state.kind === "submitting" && (
            <p className="text-slate-600 flex items-center justify-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" /> Updating preferences…
            </p>
          )}
          {state.kind === "success" && (
            <p className="text-slate-600">You've been unsubscribed. You will no longer receive notification emails.</p>
          )}
          {state.kind === "already" && (
            <p className="text-slate-600">You're already unsubscribed.</p>
          )}
          {state.kind === "invalid" && (
            <p className="text-slate-600">This unsubscribe link is invalid or has expired.</p>
          )}
          {state.kind === "error" && (
            <p className="text-red-600">{state.message}</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Unsubscribe;