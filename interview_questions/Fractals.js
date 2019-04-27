function fractals(size, levels, x) {
  let lineBreak = '_',
  space = ' '.repeat(x).concat(lineBreak.repeat(size))
  if(levels > 0) {
    console.log(space)
    fractals(size/3, levels - 1, x)
    fractals(size/3, levels - 1, x + 2*size/3)
  } 
}

fractals(100, 4, 5)

// Should be called notAFractal() but a cute and wholesome toy boat