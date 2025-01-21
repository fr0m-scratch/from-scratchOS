import { memo } from "react";
import AppsLoader from "components/system/Apps/AppsLoader";
import Desktop from "components/system/Desktop";
import Taskbar from "components/system/Taskbar";
import useGlobalErrorHandler from "hooks/useGlobalErrorHandler";
import useGlobalKeyboardShortcuts from "hooks/useGlobalKeyboardShortcuts";
import useIFrameFocuser from "hooks/useIFrameFocuser";
import useUrlLoader from "hooks/useUrlLoader";
import Browser from "components/apps/Browser";

const Index = (): React.ReactElement => {
  useIFrameFocuser();
  useUrlLoader();
  useGlobalKeyboardShortcuts();
  useGlobalErrorHandler();

  return (
    <Desktop>
      <Taskbar />
      <AppsLoader />
      <Browser id="" />
    </Desktop>
  );
};

export default memo(Index);
