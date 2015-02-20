export default function (target, source, ...rest) {
  return !source ? target :
         !rest.length ? target.reduce((m, n, k) => {
           const ratio = ~~(target.length / source.length),
                 item = source[~~(k / ratio)];

           return !item ? m.concat(n) :
                  (k + 1) % ratio ? m.concat(n) :
                  m.concat(n, item);
         }, []) :
         interleave(interleave(target, source), ...rest);
}
