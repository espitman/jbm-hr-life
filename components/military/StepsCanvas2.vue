<template>
    <div class="max-w-6xl mx-auto p-6 font-sans" dir="rtl">
      <canvas 
        ref="canvas" 
        class="w-full border border-gray-200 rounded-lg shadow-sm"
        height="660"
      ></canvas>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, nextTick } from 'vue';
  
  const canvas = ref(null);
  
  onMounted(() => {
    nextTick(() => {
      drawFlowchart();
      
      // Make canvas responsive
      window.addEventListener('resize', drawFlowchart);
    });
  });
  
  const drawFlowchart = () => {
    const canvasElement = canvas.value;
    const ctx = canvasElement.getContext('2d');
    
    // Set canvas dimensions to match container size
    const container = canvasElement.parentElement;
    canvasElement.width = container.clientWidth;
    
    // Define box dimensions
    const boxWidth = canvasElement.width * 0.25;
    const boxHeight = boxWidth * 0.6;
    const padding = 20;
    const arrowLength = 50;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    
    // Set font for RTL text
    ctx.font = "bold 14px 'Vazirmatn', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    
    // Define box positions (right to left)
    const boxes = [
      // Right column (green)
      {
        x: canvasElement.width - boxWidth - padding,
        y: padding,
        width: boxWidth,
        height: boxHeight,
        text: "در صورت عدم تایید فرم\nباید اصلاح و مجدد ارزیابی\nشود",
        color: "#4CAF50"
      },
      {
        x: canvasElement.width - boxWidth - padding,
        y: padding + boxHeight + arrowLength,
        width: boxWidth,
        height: boxHeight,
        text: "در صورت تایید فرد برای\nانجام پروژه به شرکت\nمعرفی میشود",
        color: "#4CAF50"
      },
      {
        x: canvasElement.width - boxWidth - padding,
        y: padding + (boxHeight + arrowLength) * 2,
        width: boxWidth,
        height: boxHeight,
        text: "انجام پروژه\nاتمام\nدریافت کارت پایان خدمت",
        color: "#4CAF50"
      },
      
      // Middle column (light green)
      {
        x: canvasElement.width - boxWidth * 2 - padding * 2,
        y: padding,
        width: boxWidth,
        height: boxHeight,
        text: "ارسال فرم پیشنهادی به\nمرکز نخبگان",
        color: "#66BB6A"
      },
      {
        x: canvasElement.width - boxWidth * 2 - padding * 2,
        y: padding + boxHeight + arrowLength,
        width: boxWidth,
        height: boxHeight,
        text: "ارائه فرم پیشنهادی ممهور\nتوسط فرد به مرکز",
        color: "#66BB6A"
      },
      {
        x: canvasElement.width - boxWidth * 2 - padding * 2,
        y: padding + (boxHeight + arrowLength) * 2,
        width: boxWidth,
        height: boxHeight,
        text: "ارائه چک به عنوان تضمین\nبه مرکز توسط شرکت",
        color: "#4DB6AC"
      },
      
      // Left column (blue)
      {
        x: padding,
        y: padding,
        width: boxWidth,
        height: boxHeight,
        text: "معرفی فرد به مرکز نخبگان",
        color: "#5C6BC0"
      },
      {
        x: padding,
        y: padding + boxHeight + arrowLength,
        width: boxWidth,
        height: boxHeight,
        text: "تخصیص فرد به مرکز با\nتوجه به سوابق و امتیازات\nوی",
        color: "#4FC3F7"
      },
      {
        x: padding,
        y: padding + (boxHeight + arrowLength) * 2,
        width: boxWidth,
        height: boxHeight,
        text: "پرداخت هزینه نظارت\nتوسط شرکت",
        color: "#4DB6AC"
      }
    ];
    
    // Draw boxes and text
    boxes.forEach(box => {
      // Draw rounded rectangle
      drawRoundedRect(ctx, box.x, box.y, box.width, box.height, 10, box.color);
      
      // Draw text
      ctx.fillStyle = "white";
      const lines = box.text.split("\n");
      const lineHeight = 20;
      const startY = box.y + (box.height - (lines.length - 1) * lineHeight) / 2;
      
      lines.forEach((line, i) => {
        ctx.fillText(line, box.x + box.width / 2, startY + i * lineHeight);
      });
    });
    
    // Draw vertical arrows
    drawVerticalArrow(ctx, boxes[0].x + boxes[0].width / 2, boxes[0].y + boxes[0].height, arrowLength, "#4CAF50");
    drawVerticalArrow(ctx, boxes[1].x + boxes[1].width / 2, boxes[1].y + boxes[1].height, arrowLength, "#4CAF50");
    
    drawVerticalArrow(ctx, boxes[3].x + boxes[3].width / 2, boxes[3].y + boxes[3].height, arrowLength, "#66BB6A");
    drawVerticalArrow(ctx, boxes[4].x + boxes[4].width / 2, boxes[4].y + boxes[4].height, arrowLength, "#66BB6A");
    
    drawVerticalArrow(ctx, boxes[6].x + boxes[6].width / 2, boxes[6].y + boxes[6].height, arrowLength, "#4FC3F7");
    drawVerticalArrow(ctx, boxes[7].x + boxes[7].width / 2, boxes[7].y + boxes[7].height, arrowLength, "#4FC3F7");
    
    // Draw horizontal arrows
    drawHorizontalArrow(ctx, boxes[3].x + boxes[3].width, boxes[0].y + boxes[0].height / 2, boxes[0].x - (boxes[3].x + boxes[3].width), "#4CAF50");
    drawHorizontalArrow(ctx, boxes[8].x + boxes[8].width, boxes[8].y + boxes[8].height / 2, boxes[5].x - (boxes[8].x + boxes[8].width), "#4DB6AC");
  };
  
  const drawRoundedRect = (ctx, x, y, width, height, radius, color) => {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(x + width, y + height, x, y + height, radius);
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  };
  
  const drawVerticalArrow = (ctx, x, y, length, color) => {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + length);
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.stroke();
  };
  
  const drawHorizontalArrow = (ctx, x, y, length, color) => {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + length, y);
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.stroke();
  };
  </script>