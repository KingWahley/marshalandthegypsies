import React from 'react';

export const FireworksWelcome: React.FC = () => {
  return (
    <script
      id="mge-instant-fireworks"
      dangerouslySetInnerHTML={{
        __html: `(function() {
          if (typeof window === 'undefined') return;
          try {
            var canvas = document.createElement('canvas');
            canvas.id = 'welcome-fireworks-canvas';
            canvas.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:99999;';
            document.body.appendChild(canvas);

            var ctx = canvas.getContext('2d');
            if (!ctx) return;

            var dpr = Math.min(window.devicePixelRatio || 1, 2);
            var width = window.innerWidth;
            var height = window.innerHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);

            window.addEventListener('resize', function() {
              width = window.innerWidth;
              height = window.innerHeight;
              canvas.width = width * dpr;
              canvas.height = height * dpr;
              ctx.scale(dpr, dpr);
            });

            var PALETTE = ['#FFFD63','#833AB4','#E1306C','#F77737','#FD1D1D','#A855F7','#38BDF8','#FFFFFF'];
            var rockets = [];
            var particles = [];
            var isLaunching = true;
            var isRunning = true;
            var animId;

            function createExplosion(x, y, color, count) {
              count = count || 90;
              for (var i = 0; i < count; i++) {
                var angle = Math.random() * Math.PI * 2;
                var speed = Math.random() * 5.8 + 1.6;
                var pColor = Math.random() > 0.35 ? color : PALETTE[Math.floor(Math.random() * PALETTE.length)];
                
                // Staggered lifespans so particles slowly and organically extinguish over time
                var decayType = Math.random();
                var decayRate;
                if (decayType < 0.30) {
                  // Fast flash sparks
                  decayRate = Math.random() * 0.012 + 0.018;
                } else if (decayType < 0.70) {
                  // Medium floating embers
                  decayRate = Math.random() * 0.006 + 0.008;
                } else {
                  // Slow, lingering golden/purple stardust
                  decayRate = Math.random() * 0.003 + 0.0035;
                }

                particles.push({
                  x: x,
                  y: y,
                  vx: Math.cos(angle) * speed,
                  vy: Math.sin(angle) * speed,
                  alpha: 1,
                  decay: decayRate,
                  color: pColor,
                  baseSize: Math.random() * 2.8 + 1.8,
                  flicker: Math.random() > 0.35
                });
              }
            }

            function launchRocket() {
              if (!isLaunching) return;
              var startX = width * 0.15 + Math.random() * (width * 0.7);
              var targetY = height * 0.12 + Math.random() * (height * 0.36);
              var color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
              rockets.push({
                x: startX,
                y: height,
                targetY: targetY,
                vx: (Math.random() - 0.5) * 1.8,
                vy: -(Math.random() * 4 + 11),
                color: color,
                particles: Math.floor(Math.random() * 35 + 75),
                trail: []
              });
            }

            // Detonate initial instant explosions
            createExplosion(width * 0.5, height * 0.28, '#FFFD63', 95);
            createExplosion(width * 0.28, height * 0.22, '#833AB4', 75);
            createExplosion(width * 0.72, height * 0.24, '#E1306C', 75);

            var schedule = [100, 300, 600, 950, 1300, 1600, 1850];
            schedule.forEach(function(delay) {
              setTimeout(function() {
                if (!isLaunching) return;
                launchRocket();
                if (Math.random() > 0.4) {
                  setTimeout(function() { if (isLaunching) launchRocket(); }, 100);
                }
              }, delay);
            });

            // Stop launching at 2.0s
            setTimeout(function() {
              isLaunching = false;
            }, 2000);

            // Safeguard cleanup
            setTimeout(function() {
              isRunning = false;
              if (canvas && canvas.parentNode) canvas.parentNode.removeChild(canvas);
            }, 5500);

            function render() {
              ctx.clearRect(0, 0, width, height);

              for (var i = rockets.length - 1; i >= 0; i--) {
                var r = rockets[i];
                r.x += r.vx;
                r.y += r.vy;
                r.trail.push({ x: r.x, y: r.y });
                if (r.trail.length > 5) r.trail.shift();

                ctx.save();
                ctx.strokeStyle = r.color;
                ctx.lineWidth = 2.5;
                ctx.shadowBlur = 8;
                ctx.shadowColor = r.color;
                ctx.beginPath();
                if (r.trail.length > 1) {
                  ctx.moveTo(r.trail[0].x, r.trail[0].y);
                  for (var k = 1; k < r.trail.length; k++) {
                    ctx.lineTo(r.trail[k].x, r.trail[k].y);
                  }
                  ctx.stroke();
                }
                ctx.restore();

                ctx.save();
                ctx.fillStyle = '#FFFFFF';
                ctx.shadowBlur = 12;
                ctx.shadowColor = r.color;
                ctx.beginPath();
                ctx.arc(r.x, r.y, 3, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();

                if (r.y <= r.targetY || r.vy >= 0) {
                  createExplosion(r.x, r.y, r.color, r.particles);
                  rockets.splice(i, 1);
                }
              }

              for (var j = particles.length - 1; j >= 0; j--) {
                var p = particles[j];
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.055; // Gentle gravity
                p.vx *= 0.982; // Air drag
                p.vy *= 0.982;
                p.vx += (Math.random() - 0.5) * 0.04; // Subtle air flutter
                p.alpha -= p.decay;

                if (p.alpha <= 0) {
                  particles.splice(j, 1);
                  continue;
                }

                ctx.save();
                var currentAlpha = p.flicker && Math.random() > 0.4 ? p.alpha * 0.6 : p.alpha;
                ctx.globalAlpha = Math.max(0, currentAlpha);
                ctx.fillStyle = p.color;
                ctx.shadowBlur = 8;
                ctx.shadowColor = p.color;
                ctx.beginPath();
                var currentSize = p.baseSize * Math.max(0.4, p.alpha);
                ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
              }

              if (!isLaunching && rockets.length === 0 && particles.length === 0) {
                if (canvas && canvas.parentNode) canvas.parentNode.removeChild(canvas);
                return;
              }

              if (isRunning) {
                animId = requestAnimationFrame(render);
              }
            }

            animId = requestAnimationFrame(render);
          } catch(e) {}
        })();`,
      }}
    />
  );
};
