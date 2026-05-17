import type { Copy, TabId } from "../types";

interface Props {
  tab: TabId;
  copy: Copy;
}

export default function OtherPage({ tab, copy }: Props) {
  const info = copy.placeholder[tab as keyof typeof copy.placeholder];
  if (!info) return null;

  return (
    <div className="lpv-other-page">
      <div className="lpv-other-page-inner">
        <h2>{info.title}</h2>
        <p>{info.body}</p>
      </div>
    </div>
  );
}
