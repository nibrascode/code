import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { countDownload } from "@/components/visit-meter";
import { STUDIO_APPS, type StudioApp } from "@/lib/apps";
import { useI18n } from "@/lib/i18n-context";

const FRAME_MS = 2000;
const FRAMES = 4;

function PlayMark() {
  return (
    <svg viewBox="0 0 24 24" className="play-btn-mark" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4.5 3.2c-.7-.4-1.5.1-1.5.9v15.8c0 .8.8 1.3 1.5.9l14.5-7.9c.7-.4.7-1.4 0-1.8L4.5 3.2Z"
      />
    </svg>
  );
}

function PhonePreview({ app, frame }: { app: StudioApp; frame: number }) {
  const { t } = useI18n();
  const lines = [app.leadKey, app.features[0], app.features[1], app.features[2]];

  if (app.shots.length > 0) {
    return (
      <div className="phone" aria-hidden="true">
        <div className="phone-screen">
          {app.shots.map((src, shotIndex) => (
            <img
              key={src}
              className={shotIndex === frame ? "phone-shot is-on" : "phone-shot"}
              src={src}
              alt=""
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="phone" aria-hidden="true">
      <div className="phone-screen">
        <i className="phone-island" />
        <div className={`phone-face is-${frame}`}>
          <img src={app.icon} alt="" />
          <b>{app.name}</b>
          <span>{t(lines[frame] ?? app.leadKey)}</span>
        </div>
      </div>
    </div>
  );
}

export function AppSpotlight() {
  const { t } = useI18n();
  const [index, setIndex] = useState(0);
  const [frame, setFrame] = useState(0);
  const app = STUDIO_APPS[index];
  const count = app.shots.length > 0 ? app.shots.length : FRAMES;
  const ready = Boolean(app.playStoreUrl);
  const ask = index % 2 === 0 ? t("spot_check") : t("spot_glance");
  const indexRef = useRef(0);
  const frameRef = useRef(0);

  useEffect(() => {
    STUDIO_APPS.forEach((item) => {
      item.shots.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    });
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      const currentApp = STUDIO_APPS[indexRef.current];
      const total = currentApp.shots.length > 0 ? currentApp.shots.length : FRAMES;
      const nextFrame = frameRef.current + 1;
      if (nextFrame >= total) {
        const nextIndex = (indexRef.current + 1) % STUDIO_APPS.length;
        indexRef.current = nextIndex;
        frameRef.current = 0;
        setIndex(nextIndex);
        setFrame(0);
        return;
      }
      frameRef.current = nextFrame;
      setFrame(nextFrame);
    }, FRAME_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="spot" aria-live="polite">
      <i
        className="spot-bar"
        key={`${app.slug}-${count}`}
        style={{ animationDuration: `${count * 2}s` }}
      />
      <div className="spot-stage">
        <div className="spot-copy">
          <p className="spot-ask">{ask}</p>
          <div className="spot-swap" key={app.slug}>
            <img src={app.icon} alt="" />
            <div>
              <h2>{app.name}</h2>
              <p>{t(app.leadKey)}</p>
            </div>
          </div>
          <div className="spot-row">
            {ready && app.playStoreUrl ? (
              <a
                className="play-btn"
                href={app.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => countDownload(app.slug)}
              >
                <PlayMark />
                <span>
                  <small>{t("download_android")}</small>
                  <b>{t("download_cta")}</b>
                </span>
              </a>
            ) : (
              <div className="play-btn is-wait" aria-disabled="true">
                <PlayMark />
                <span>
                  <small>{t("download_android")}</small>
                  <b>{t("soon")}</b>
                </span>
              </div>
            )}
            <Link to="/apps/$slug" params={{ slug: app.slug }} className="spot-open">
              {t("spot_open")}
            </Link>
          </div>
        </div>
        <PhonePreview app={app} frame={frame} />
      </div>
      <div className="spot-dots">
        {STUDIO_APPS.map((item, itemIndex) => (
          <button
            key={item.slug}
            type="button"
            className={itemIndex === index ? "is-on" : undefined}
            aria-label={item.name}
            aria-current={itemIndex === index ? "true" : undefined}
            onClick={() => {
              indexRef.current = itemIndex;
              frameRef.current = 0;
              setIndex(itemIndex);
              setFrame(0);
            }}
          />
        ))}
      </div>
    </section>
  );
}
