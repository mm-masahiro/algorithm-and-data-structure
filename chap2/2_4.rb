def calc_dist(x1, x2, y1, y2)
  return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))
end

def main(n)
  x = []
  y = []

  min_dist = 100000

  for i in 0..n-1
    x.push(i)
    y.push(i)
  end

  for i in 0..n-1
    for j in i+1..n-1
      dist = calc_dist(x[i], x[j], y[i], y[j])
      if (dist < min_dist)
        min_dist = dist
      end
    end
  end

  return min_dist
end

puts main(5)
