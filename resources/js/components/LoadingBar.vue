<template>
  <svg class="loading-spinner">
    <circle
      :cx="circlePositions[index] && circlePositions[index].x"
      :cy="circlePositions[index] && circlePositions[index].y"
      :r="item.radius"
      :fill="item.color"
      v-for="(item, index) in circles"
      :key="index"
    />
  </svg>
</template>

<script>
const CENTER_X = 50;
const CENTER_Y = 50;
const RADIUS = 20;

function positionOnCircle(radius, angle, center) {
  return {
    x: center.x + radius * Math.cos(toRadians(angle)),
    y: center.y + radius * Math.sin(toRadians(angle)),
  };
}

function toRadians(angle) {
  return (angle * Math.PI) / 180;
}

function calculatePositions(component) {
  let angleIncrement = 360 / component.circles.length;
  let positions = {};
  component.circles.forEach((circle, index) => {
    positions[index] = positionOnCircle(RADIUS, angleIncrement * index, {
      x: CENTER_X,
      y: CENTER_Y,
    });
  });
  return positions;
}

export default {
  data() {
    return {
      circles: [
        { color: "#fff3e0", radius: 0 },
        { color: "#ffe0b2", radius: 0 },
        { color: "#ffcc80", radius: 0 },
        { color: "#ffb74d", radius: 0 },
        { color: "#ffa726", radius: 0 },
        { color: "#ff9800", radius: 0 },
        { color: "#fb8c00", radius: 0 },
        { color: "#f57c00", radius: 0 },
        { color: "#ef6c00", radius: 0 },
      ],
      counter: 0,
      interval: null,
    };
  },
  computed: {
    circlePositions: calculatePositions,
  },
  created() {
    this.interval = setInterval(() => {
      this.counter++;
      this.circles = this.circles.map((item, index) => ({
        ...item,
        radius: (this.counter + index) % 8,
      }));
    }, 70);
  },
  destroyed() {
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
.loading-spinner {
  width: 100px;
  height: 100px;
}
</style>
