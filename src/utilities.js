// Drawing Function
export const drawHand = (predictions, ctx) => {
  // check predictions
  if (predictions.length > 0) {
    //logic
    predictions.forEach((prediction) => {
      const landmarks = prediction.landmarks;

      for (let i = 0; i < landmarks.length; i++) {
        const x = landmarks[i][0];
        const y = landmarks[i][1];
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 3 * Math.PI);
        ctx.fillStyle = "indigo";
        ctx.fill();
      }
    });
  }
};
