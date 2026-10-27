import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

/** Dark card with a gold icon, styled like the store Data Safety card (.ns-safe). */
export function InfoCard({
  icon: Icon,
  title,
  href,
  muted,
  children,
  id,
}: {
  icon: LucideIcon;
  title?: ReactNode;
  href?: string;
  muted?: ReactNode;
  children?: ReactNode;
  id?: string;
}) {
  return (
    <article className="info-card" id={id}>
      <Icon className="info-card-icon" aria-hidden="true" />
      <div className="info-card-body">
        {muted ? <p className="info-card-muted">{muted}</p> : null}
        {title ? (
          href ? (
            <a className="info-card-title" href={href}>{title}</a>
          ) : (
            <h3 className="info-card-title">{title}</h3>
          )
        ) : null}
        {children}
      </div>
    </article>
  );
}

export function InfoCards({ children }: { children: ReactNode }) {
  return <div className="info-cards">{children}</div>;
}
