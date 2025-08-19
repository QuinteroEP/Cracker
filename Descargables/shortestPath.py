import math

def min_distance(points):
    n = len(points)
    if n < 2:
        return None  # Not enough points

    min_dist = float('inf')
    pair = None

    # Compare every pair of points
    for i in range(n):
        for j in range(i + 1, n):
            x1, y1 = points[i]
            x2, y2 = points[j]
            dist = math.sqrt((x2 - x1)**2 + (y2 - y1)**2)

            if dist < min_dist:
                min_dist = dist
                pair = (points[i], points[j])

    return min_dist, pair


coordinates = [(1, 2), (3, 4), (5, 1), (2, 3), (4, 2)]
print(f"Coordenadas: {coordinates}")
distance, closest_pair = min_distance(coordinates)

print()
print(f"Distancia minima: {distance:.4f}")
print(f"Entre: {closest_pair}")