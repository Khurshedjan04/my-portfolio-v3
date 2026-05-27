"use client";
import { useEffect } from "react";

const Bubble = () => {
  useEffect(() => {
    const cv = document.createElement("canvas");
    const ctx = cv.getContext("2d")!;
    cv.style.cssText =
      "position:fixed;top:0;left:0;pointer-events:none;z-index:9999;";
    cv.width = window.innerWidth;
    cv.height = window.innerHeight;
    document.body.appendChild(cv);
    let W = cv.width,
      H = cv.height;
    let mx = W / 2,
      my = H / 2,
      pmx = W / 2,
      pmy = H / 2,
      t = 0;
    let rafId: number;
    const cur = { x: W / 2, y: H / 2, tx: W / 2, ty: H / 2 };

    type Ink = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      life: number;
      decay: number;
    };
    type Spark = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      decay: number;
      r: number;
      hue: number;
    };
    type Trail = { x: number; y: number; life: number };
    type Line = {
      x: number;
      y: number;
      len: number;
      speed: number;
      offset: number;
      amp: number;
      freq: number;
      alpha: number;
      thickness: number;
    };
    type Jelly = {
      x: number;
      y: number;
      vy: number;
      wobble: number;
      wobbleSpeed: number;
      sz: number;
      tentacles: number;
      hue: number;
    };

    const inks: Ink[] = [],
      sparks: Spark[] = [],
      trail: Trail[] = [];

    const lines: Line[] = Array.from({ length: 38 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      len: 60 + Math.random() * 120,
      speed: 0.18 + Math.random() * 0.32,
      offset: Math.random() * Math.PI * 2,
      amp: 18 + Math.random() * 40,
      freq: 0.003 + Math.random() * 0.004,
      alpha: 0.03 + Math.random() * 0.06,
      thickness: 0.4 + Math.random() * 1.0,
    }));

    const jellies: Jelly[] = [];
    const spawnJelly = (px: number, py: number) => {
      const sz = 10 + Math.random() * 22;
      jellies.push({
        x: px,
        y: py,
        vy: -(0.15 + Math.random() * 0.25),
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.02 + Math.random() * 0.02,
        sz,
        tentacles: Math.floor(4 + Math.random() * 5),
        hue: 185 + Math.random() * 40,
      });
    };
    for (let i = 0; i < 5; i++)
      spawnJelly(Math.random() * W, Math.random() * H);

    const spawnInk = (px: number, py: number) => {
      for (let i = 0; i < 22; i++) {
        const a = Math.random() * Math.PI * 2,
          spd = 0.4 + Math.random() * 2.2;
        inks.push({
          x: px,
          y: py,
          vx: Math.cos(a) * spd,
          vy: Math.sin(a) * spd - 0.5,
          r: 6 + Math.random() * 14,
          life: 1,
          decay: 0.012 + Math.random() * 0.01,
        });
      }
    };
    const spawnSparks = (px: number, py: number, n: number) => {
      for (let i = 0; i < n; i++) {
        const a = Math.random() * Math.PI * 2,
          spd = 0.3 + Math.random() * 1.8;
        sparks.push({
          x: px,
          y: py,
          vx: Math.cos(a) * spd,
          vy: Math.sin(a) * spd,
          life: 1,
          decay: 0.014 + Math.random() * 0.018,
          r: 1 + Math.random() * 2.5,
          hue: 190 + Math.random() * 25,
        });
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      pmx = mx;
      pmy = my;
      mx = e.clientX;
      my = e.clientY;
      cur.tx = mx;
      cur.ty = my;
      trail.push({ x: mx, y: my, life: 1 });
      if (trail.length > 40) trail.shift();
      const dx = mx - pmx,
        dy = my - pmy,
        dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > 4) spawnSparks(mx, my, Math.min(3, Math.floor(dist / 6)));
    };
    const onClick = (e: MouseEvent) => {
      spawnInk(e.clientX, e.clientY);
      spawnSparks(e.clientX, e.clientY, 20);
    };
    const onResize = () => {
      W = cv.width = window.innerWidth;
      H = cv.height = window.innerHeight;
    };

    const loop = () => {
      t += 0.012;
      ctx.clearRect(0, 0, W, H);
      cur.x += (cur.tx - cur.x) * 0.14;
      cur.y += (cur.ty - cur.y) * 0.14;

      // depth glow under cursor — smaller, much more subtle
      const bg = ctx.createRadialGradient(mx, my, 0, mx, my, 80);
      bg.addColorStop(0, "rgba(10,28,55,0.08)");
      bg.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      // current lines — lower alpha ceiling
      for (const l of lines) {
        l.x -= l.speed;
        if (l.x < -200) {
          l.x = W + 50;
          l.y = Math.random() * H;
        }
        ctx.beginPath();
        for (let s = 0; s < l.len; s += 3) {
          const px = l.x + s,
            py = l.y + Math.sin(px * l.freq + t + l.offset) * l.amp;
          if (s === 0) {
            ctx.moveTo(px, py);
          } else {
            ctx.lineTo(px, py);
          }
        }
        ctx.strokeStyle = `rgba(69,173,217,${l.alpha * 0.45})`;
        ctx.lineWidth = l.thickness * 0.7;
        ctx.stroke();
      }
      // jellyfish
      for (let i = jellies.length - 1; i >= 0; i--) {
        const j = jellies[i];
        j.wobble += j.wobbleSpeed;
        j.x += Math.sin(j.wobble * 0.7) * 0.4;
        j.y += j.vy;
        if (j.y < -j.sz * 4) {
          jellies.splice(i, 1);
          spawnJelly(Math.random() * W, H + j.sz);
          continue;
        }
        const grd = ctx.createRadialGradient(j.x, j.y, 0, j.x, j.y, j.sz * 1.4);
        grd.addColorStop(0, `hsla(${j.hue},70%,65%,0.18)`);
        grd.addColorStop(1, `hsla(${j.hue},70%,65%,0)`);
        ctx.beginPath();
        ctx.arc(j.x, j.y, j.sz * 1.4, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(
          j.x,
          j.y,
          j.sz * (0.9 + Math.sin(j.wobble) * 0.1),
          j.sz * 0.65,
          0,
          Math.PI,
          0
        );
        ctx.strokeStyle = `hsla(${j.hue},65%,70%,0.55)`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
        for (let k = 0; k < j.tentacles; k++) {
          const tx = j.x + (k - (j.tentacles - 1) / 2) * (j.sz * 0.3);
          ctx.beginPath();
          ctx.moveTo(tx, j.y);
          const tlen = j.sz * 1.2 + Math.sin(t * 1.2 + k) * j.sz * 0.5;
          ctx.bezierCurveTo(
            tx + Math.sin(t + k * 1.3) * 8,
            j.y + tlen * 0.4,
            tx + Math.sin(t * 0.8 + k) * 10,
            j.y + tlen * 0.75,
            tx + Math.sin(t * 0.6 + k * 0.9) * 6,
            j.y + tlen
          );
          ctx.strokeStyle = `hsla(${j.hue},60%,70%,0.3)`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }

      // ink
      for (let i = inks.length - 1; i >= 0; i--) {
        const k = inks[i];
        k.vx *= 0.96;
        k.vy *= 0.96;
        k.vy -= 0.008;
        k.x += k.vx;
        k.y += k.vy;
        k.life -= k.decay;
        if (k.life <= 0) {
          inks.splice(i, 1);
          continue;
        }
        const ig = ctx.createRadialGradient(k.x, k.y, 0, k.x, k.y, k.r * 2);
        ig.addColorStop(0, `rgba(15,40,80,${k.life * 0.55})`);
        ig.addColorStop(1, `rgba(15,40,80,0)`);
        ctx.beginPath();
        ctx.arc(k.x, k.y, k.r * 2, 0, Math.PI * 2);
        ctx.fillStyle = ig;
        ctx.fill();
      }

      // sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.vx *= 0.94;
        s.vy *= 0.94;
        s.vy += 0.015;
        s.x += s.vx;
        s.y += s.vy;
        s.life -= s.decay;
        if (s.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }
        const sg = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 3.5);
        sg.addColorStop(0, `hsla(${s.hue},85%,72%,${s.life * 0.7})`);
        sg.addColorStop(1, `hsla(${s.hue},85%,72%,0)`);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = sg;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * s.life, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${s.hue},90%,88%,${s.life})`;
        ctx.fill();
      }

      // custom cursor rings
      ctx.beginPath();
      ctx.arc(cur.x, cur.y, 5, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(69,173,217,0.9)";
      ctx.lineWidth = 1.2;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cur.x, cur.y, 12, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(69,173,217,0.25)";
      ctx.lineWidth = 0.8;
      ctx.stroke();

      rafId = requestAnimationFrame(loop);
    };

    document.body.style.cursor = "none";
    document.body.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("click", onClick);
    window.addEventListener("resize", onResize);
    loop();

    return () => {
      document.body.style.cursor = "";
      document.body.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("click", onClick);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
      cv.remove();
    };
  }, []);

  return null;
};

export default Bubble;
