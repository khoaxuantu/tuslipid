'use client'

export default function GoTopButton() {
  return (
    <button className="sl-c-btn__go-top p-2" onClick={() => ScrollToTop()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="16"
        width="12"
        viewBox="0 0 384 512"
      >
        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
      </svg>
    </button>
  );
}

export function ScrollToTop() {
  setTimeout(() => {
    document.documentElement.scrollTo({ top: 0, behavior: "auto" });
  }, 100);
}
