document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".author__avatar").forEach((avatar) => {
    const zoom = parseFloat(avatar.dataset.avatarZoom || "1") || 1;
    const offsetX = parseFloat(avatar.dataset.avatarOffsetX || "50") || 50;
    const offsetY = parseFloat(avatar.dataset.avatarOffsetY || "50") || 50;
    const shiftScale = Math.max(zoom - 1, 0);
    const shiftX = (50 - offsetX) * shiftScale;
    const shiftY = (50 - offsetY) * shiftScale;

    avatar.style.setProperty("--author-avatar-scale", String(zoom));
    avatar.style.setProperty("--author-avatar-shift-x", `${shiftX}%`);
    avatar.style.setProperty("--author-avatar-shift-y", `${shiftY}%`);
  });
});
