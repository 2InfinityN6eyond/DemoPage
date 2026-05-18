import type { Copy } from "../i18n";
import type { TabId } from "../types";

interface Props {
  copy: Copy;
  tab: Exclude<TabId, "chats">;
}

export default function PlaceholderPage({ copy, tab }: Props) {
  const { title, body } = copy.placeholder[tab];

  return (
    <div className="lpv-other-page">
      <div className="lpv-other-page-inner">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
}
