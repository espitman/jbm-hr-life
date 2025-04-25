<template>
  <div class="max-w-6xl mx-auto mt-12" dir="rtl">
    <!-- Header -->
    <div class="mb-8">
      <div class="flex items-center justify-start mb-4">
        <div class="w-6 h-6 rounded-full bg-amber-500 ml-2"></div>
        <h2 class="text-2xl font-bold">مراحل درخواست تسهیلات امریه</h2>
      </div>
    </div>
    
    <!-- Process Flowchart Container -->
    <div class="border border-gray-300 rounded-3xl p-2 md:p-4 shadow-sm">
      <canvas ref="canvas" class="w-full"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const canvas = ref(null)
let ctx = null
let animationFrameId = null

const steps = [
  {
    text: 'تایید درخواست توسط شرکت',
    color: '#8B5CF6', // purple-500
    x: 0,
    y: 0
  },
  {
    text: 'ثبت نام در سایت ستاد کل نیروهای مسلح',
    color: '#EC4899', // pink-500
    x: 0,
    y: 0
  },
  {
    text: 'آپلود مدارک در سامانه',
    color: '#F97316', // orange-500
    x: 0,
    y: 0
  },
  {
    text: 'درخواست ترک کار و حکم امریه',
    color: '#3B82F6', // blue-500
    x: 0,
    y: 0
  },
  {
    text: 'تایید فرد توسط ستاد',
    color: '#2563EB', // blue-600
    x: 0,
    y: 0
  },
  {
    text: 'مراجعه به پلیس +۱۰ و دریافت برگه سبز',
    color: '#FBBF24', // amber-400
    x: 0,
    y: 0
  },
  {
    text: 'دریافت برگه سفید چند روز قبل از شروع خدمت',
    color: '#84CC16', // lime-500
    x: 0,
    y: 0
  },
  {
    text: 'شروع دوره آموزشی به مدت ۲ ماه',
    color: '#22C55E', // green-500
    x: 0,
    y: 0
  },
  {
    text: 'شروع به کار در شرکت به عنوان مامور وظیفه',
    color: '#3B82F6', // blue-500
    x: 0,
    y: 0
  },
  {
    text: 'ارائه نامه تاییدیه به معاونت علمی',
    color: '#14B8A6', // teal-500
    x: 0,
    y: 0
  },
  {
    text: 'دریافت برگه امریه (روز آخر دوره آموزشی)',
    color: '#2DD4BF', // teal-400
    x: 0,
    y: 0
  }
]

const drawStep = (step, x, y, width, height) => {
  if (!ctx) return null
  
  // Draw rounded rectangle
  const radius = 12 // Corner radius
  ctx.beginPath()
  ctx.moveTo(x + radius, y)
  ctx.lineTo(x + width - radius, y)
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
  ctx.lineTo(x + width, y + height - radius)
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
  ctx.lineTo(x + radius, y + height)
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
  ctx.lineTo(x, y + radius)
  ctx.quadraticCurveTo(x, y, x + radius, y)
  ctx.closePath()
  
  // Fill rectangle
  ctx.fillStyle = step.color
  ctx.fill()
  
  // Draw text
  ctx.fillStyle = '#FFFFFF'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.font = '14px "Vazirmatn"'
  
  // Split text into two lines if needed
  const words = step.text.split(' ')
  const midPoint = Math.ceil(words.length / 2)
  const line1 = words.slice(0, midPoint).join(' ')
  const line2 = words.slice(midPoint).join(' ')
  
  ctx.fillText(line1, x + width/2, y + height/2 - 10)
  ctx.fillText(line2, x + width/2, y + height/2 + 10)
  
  return { x, y, width, height }
}

const drawConnector = (start, end, color) => {
  if (!ctx) return
  
  ctx.beginPath()
  ctx.moveTo(start.x, start.y)
  ctx.lineTo(end.x, end.y)
  ctx.strokeStyle = color
  ctx.lineWidth = 2
  ctx.stroke()
}

const drawRightAngleConnector = (start, end, color) => {
  if (!ctx) return
  
  ctx.beginPath()
  ctx.moveTo(start.x, start.y)
  // First vertical line
  ctx.lineTo(start.x, end.y)
  // Then horizontal line
  ctx.lineTo(end.x, end.y)
  ctx.strokeStyle = color
  ctx.lineWidth = 2
  ctx.stroke()
}

const draw = () => {
  if (!canvas.value) return
  
  const canvasElement = canvas.value
  const dpr = window.devicePixelRatio || 1
  const rect = canvasElement.getBoundingClientRect()
  
  // Calculate dimensions
  const padding = 20
  const stepWidth = (rect.width - padding * 5) / 4
  const stepHeight = 96 // h-24
  const stepSpacing = 48 // h-6 * 2
  
  // Calculate total height needed for each column
  const column1Height = (stepHeight + stepSpacing) * 3 - stepSpacing // 3 steps
  const column2Height = (stepHeight + stepSpacing) * 2 - stepSpacing // 2 steps
  const column3Height = (stepHeight + stepSpacing) * 3 - stepSpacing // 3 steps
  const column4Height = (stepHeight + stepSpacing) * 3 - stepSpacing // 3 steps
  
  // Find the maximum height among all columns
  const maxColumnHeight = Math.max(column1Height, column2Height, column3Height, column4Height)
  
  // Set canvas height to match the content height plus padding
  const canvasHeight = maxColumnHeight + padding * 2
  canvasElement.width = rect.width * dpr
  canvasElement.height = canvasHeight * dpr
  ctx = canvasElement.getContext('2d')
  ctx.scale(dpr, dpr)
  
  // Clear canvas
  ctx.clearRect(0, 0, rect.width, canvasHeight)
  
  // Calculate starting y position for each column (from bottom)
  const column1StartY = canvasHeight - padding - column1Height
  const column2StartY = canvasHeight - padding - column2Height
  const column3StartY = canvasHeight - padding - column3Height
  const column4StartY = canvasHeight - padding - column4Height
  
  // Draw steps and store their positions
  const stepPositions = []
  
  // Column 1
  let y = column1StartY
  for (let i = 0; i < 3; i++) {
    const step = steps[i]
    const position = drawStep(step, padding, y, stepWidth, stepHeight)
    if (position) stepPositions.push(position)
    y += stepHeight + stepSpacing
  }
  
  // Column 2
  y = column2StartY
  for (let i = 3; i < 5; i++) {
    const step = steps[i]
    const position = drawStep(step, padding * 2 + stepWidth, y, stepWidth, stepHeight)
    if (position) stepPositions.push(position)
    y += stepHeight + stepSpacing
  }
  
  // Column 3
  y = column3StartY
  for (let i = 5; i < 8; i++) {
    const step = steps[i]
    const position = drawStep(step, padding * 3 + stepWidth * 2, y, stepWidth, stepHeight)
    if (position) stepPositions.push(position)
    y += stepHeight + stepSpacing
  }
  
  // Column 4
  y = column4StartY
  for (let i = 8; i < 11; i++) {
    const step = steps[i]
    const position = drawStep(step, padding * 4 + stepWidth * 3, y, stepWidth, stepHeight)
    if (position) stepPositions.push(position)
    y += stepHeight + stepSpacing
  }
  
  // Draw connectors
  if (stepPositions.length >= 11) {
    // Step 1 to Step 2
    drawConnector(
      { x: stepPositions[0].x + stepPositions[0].width/2, y: stepPositions[0].y + stepPositions[0].height },
      { x: stepPositions[1].x + stepPositions[1].width/2, y: stepPositions[1].y },
      steps[0].color
    )

    // Step 2 to Step 3
    drawConnector(
      { x: stepPositions[1].x + stepPositions[1].width/2, y: stepPositions[1].y + stepPositions[1].height },
      { x: stepPositions[2].x + stepPositions[2].width/2, y: stepPositions[2].y },
      steps[1].color
    )

    // Step 3 to Step 5 (direct connection)
    drawConnector(
      { x: stepPositions[2].x + stepPositions[2].width, y: stepPositions[2].y + stepPositions[2].height/2 },
      { x: stepPositions[4].x, y: stepPositions[4].y + stepPositions[4].height/2 },
      steps[2].color
    )

    // Step 5 to Step 4
    drawConnector(
      { x: stepPositions[4].x + stepPositions[4].width/2, y: stepPositions[4].y },
      { x: stepPositions[3].x + stepPositions[3].width/2, y: stepPositions[3].y + stepPositions[3].height },
      steps[4].color
    )

    // Step 4 to Step 6 (right-angled connection)
    drawRightAngleConnector(
      { x: stepPositions[3].x + stepPositions[3].width/2, y: stepPositions[3].y },
      { x: stepPositions[5].x, y: stepPositions[5].y + stepPositions[5].height/2 },
      steps[3].color
    )

    // Step 6 to Step 7
    drawConnector(
      { x: stepPositions[5].x + stepPositions[5].width/2, y: stepPositions[5].y + stepPositions[5].height },
      { x: stepPositions[6].x + stepPositions[6].width/2, y: stepPositions[6].y },
      steps[5].color
    )

    // Step 7 to Step 8
    drawConnector(
      { x: stepPositions[6].x + stepPositions[6].width/2, y: stepPositions[6].y + stepPositions[6].height },
      { x: stepPositions[7].x + stepPositions[7].width/2, y: stepPositions[7].y },
      steps[6].color
    )

    // Step 8 to Step 11 (direct connection)
    drawConnector(
      { x: stepPositions[7].x + stepPositions[7].width, y: stepPositions[7].y + stepPositions[7].height/2 },
      { x: stepPositions[10].x, y: stepPositions[10].y + stepPositions[10].height/2 },
      steps[7].color
    )

    // Step 9 to Step 10
    drawConnector(
      { x: stepPositions[8].x + stepPositions[8].width/2, y: stepPositions[8].y + stepPositions[8].height },
      { x: stepPositions[9].x + stepPositions[9].width/2, y: stepPositions[9].y },
      steps[8].color
    )

    // Step 10 to Step 11
    drawConnector(
      { x: stepPositions[9].x + stepPositions[9].width/2, y: stepPositions[9].y + stepPositions[9].height },
      { x: stepPositions[10].x + stepPositions[10].width/2, y: stepPositions[10].y },
      steps[9].color
    )
  }
}

const handleResize = () => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
  animationFrameId = requestAnimationFrame(draw)
}

// Load Vazirmatn font
const loadFont = () => {
  const font = new FontFace('Vazirmatn', 'url(/public/fonts/Vazirmatn-Regular.ttf)', {
    weight: '400',
    style: 'normal'
  })
  font.load().then(() => {
    document.fonts.add(font)
  })
}

onMounted(() => {
  loadFont()
  // Wait for next tick to ensure canvas is mounted
  nextTick(() => {
    draw()
    window.addEventListener('resize', handleResize)
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
})
</script> 