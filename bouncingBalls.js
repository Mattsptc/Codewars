function bouncingBall(h,  bounce,  window) {
    if(h>0 && bounce<1 && bounce>0 && window < h) {
        let count = 1
        h = h * bounce
        while (h > window) {
            count +=2
            h = h* bounce
        }
        return count
    }
    else return -1
  }

  console.log(bouncingBall(3.0, 0.66, 1.5))
  console.log(bouncingBall(30.0, 0.66, 1.5))
  console.log(bouncingBall(3.0, 1, 1.5))
