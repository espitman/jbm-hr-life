<template>
    <div class="max-w-6xl mx-auto p-6 font-sans" dir="rtl">
      <canvas 
        ref="canvas" 
        class="w-full border border-gray-200 rounded-lg shadow-sm"
      ></canvas>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, nextTick } from 'vue';
  
  const canvas = ref(null);
  
  // Load Vazirmatn font
  const loadFont = async () => {
    const font = new FontFace('Vazirmatn', 'url(/public/fonts/Vazirmatn-Regular.ttf)');
    try {
      const loadedFont = await font.load();
      document.fonts.add(loadedFont);
    } catch (error) {
      console.error('Error loading Vazirmatn font:', error);
    }
  };
  
  onMounted(async () => {
    await loadFont();
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
    const boxHeight = 96; // Match StepsCanvas height
    const padding = 20;
    const arrowLength = 50;
    
    // Calculate total height needed
    const totalRows = 3; // We have 3 rows
    const totalHeight = (boxHeight * totalRows) + // Height of all boxes
                       (arrowLength * (totalRows - 1)) + // Height of arrows between boxes
                       (padding * 2); // Top and bottom padding
    
    canvasElement.height = totalHeight;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    
    // Set font for RTL text
    ctx.font = '14px Vazirmatn';
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
        color: "#8B5CF6" // purple-500
      },
      {
        x: canvasElement.width - boxWidth - padding,
        y: padding + boxHeight + arrowLength,
        width: boxWidth,
        height: boxHeight,
        text: "در صورت تایید فرد برای\nانجام پروژه به شرکت\nمعرفی میشود",
        color: "#EC4899" // pink-500
      },
      {
        x: canvasElement.width - boxWidth - padding,
        y: padding + (boxHeight + arrowLength) * 2,
        width: boxWidth,
        height: boxHeight,
        text: "انجام پروژه\nاتمام\nدریافت کارت پایان خدمت",
        color: "#F97316" // orange-500
      },
      
      // Middle column (light green)
      {
        x: canvasElement.width - boxWidth * 2 - padding * 2,
        y: padding,
        width: boxWidth,
        height: boxHeight,
        text: "ارسال فرم پیشنهادی به\nمرکز نخبگان",
        color: "#3B82F6" // blue-500
      },
      {
        x: canvasElement.width - boxWidth * 2 - padding * 2,
        y: padding + boxHeight + arrowLength,
        width: boxWidth,
        height: boxHeight,
        text: "ارائه فرم پیشنهادی ممهور\nتوسط فرد به مرکز",
        color: "#2563EB" // blue-600
      },
      {
        x: canvasElement.width - boxWidth * 2 - padding * 2,
        y: padding + (boxHeight + arrowLength) * 2,
        width: boxWidth,
        height: boxHeight,
        text: "ارائه چک به عنوان تضمین\nبه مرکز توسط شرکت",
        color: "#FBBF24" // amber-400
      },
      
      // Left column (blue)
      {
        x: padding,
        y: padding,
        width: boxWidth,
        height: boxHeight,
        text: "معرفی فرد به مرکز نخبگان",
        color: "#84CC16" // lime-500
      },
      {
        x: padding,
        y: padding + boxHeight + arrowLength,
        width: boxWidth,
        height: boxHeight,
        text: "تخصیص فرد به مرکز با\nتوجه به سوابق و امتیازات\nوی",
        color: "#22C55E" // green-500
      },
      {
        x: padding,
        y: padding + (boxHeight + arrowLength) * 2,
        width: boxWidth,
        height: boxHeight,
        text: "پرداخت هزینه نظارت\nتوسط شرکت",
        color: "#3B82F6" // blue-500
      }
    ];
    
    // Draw boxes and text
    boxes.forEach(box => {
      // Draw rounded rectangle with larger radius
      drawRoundedRect(ctx, box.x, box.y, box.width, box.height, 12, box.color);
      
      // Draw text
      ctx.fillStyle = "white";
      const lines = box.text.split("\n");
      const lineHeight = 20;
      const startY = box.y + (box.height - (lines.length - 1) * lineHeight) / 2;
      
      lines.forEach((line, i) => {
        ctx.fillText(line, box.x + box.width / 2, startY + i * lineHeight);
      });
    });
    
    // Draw vertical arrows with matching colors
    drawVerticalArrow(ctx, boxes[0].x + boxes[0].width / 2, boxes[0].y + boxes[0].height, arrowLength, boxes[0].color);
    drawVerticalArrow(ctx, boxes[1].x + boxes[1].width / 2, boxes[1].y + boxes[1].height, arrowLength, boxes[1].color);
    
    drawVerticalArrow(ctx, boxes[3].x + boxes[3].width / 2, boxes[3].y + boxes[3].height, arrowLength, boxes[3].color);
    drawVerticalArrow(ctx, boxes[4].x + boxes[4].width / 2, boxes[4].y + boxes[4].height, arrowLength, boxes[4].color);
    
    drawVerticalArrow(ctx, boxes[6].x + boxes[6].width / 2, boxes[6].y + boxes[6].height, arrowLength, boxes[6].color);
    drawVerticalArrow(ctx, boxes[7].x + boxes[7].width / 2, boxes[7].y + boxes[7].height, arrowLength, boxes[7].color);
    
    // Draw horizontal arrows with matching colors
    drawHorizontalArrow(ctx, boxes[3].x + boxes[3].width, boxes[0].y + boxes[0].height / 2, boxes[0].x - (boxes[3].x + boxes[3].width), boxes[3].color);
    drawHorizontalArrow(ctx, boxes[8].x + boxes[8].width, boxes[8].y + boxes[8].height / 2, boxes[5].x - (boxes[8].x + boxes[8].width), boxes[8].color);
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
