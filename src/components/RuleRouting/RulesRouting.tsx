import { RuleModal } from "../RuleModal/RuleModal";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export const RuleRouting = () => {
  const [showRules, setShowRules] = useState<boolean>(true);
  return showRules ? (
    <RuleModal showRules={showRules} setShowRules={setShowRules} />
  ) : (
    <Outlet />
  );
};
