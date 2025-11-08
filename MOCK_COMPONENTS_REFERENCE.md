# Mock Component Patterns - Referans Dosyası

Bu dosya, projede kullanılan tüm mock component pattern'lerini içerir. Başka projelerde kullanmak için referans olarak kullanılabilir.

## Genel Yapı

Tüm mock component'ler şu genel yapıyı takip eder:

```tsx
<section className="h-screen w-full overflow-hidden bg-background relative flex items-center justify-center px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-4">
  <div className="max-w-7xl mx-auto w-full h-full flex flex-col">
    {/* Mock Container */}
    <div className="bg-black rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-border/50 shadow-2xl flex-1 flex flex-col min-h-0">
      {/* Browser/Window Header */}
      {/* Main Content */}
    </div>
  </div>
</section>
```

---

## 1. Browser Header Pattern

Tüm mock'larda kullanılan standart browser header:

```tsx
{/* Browser Header */}
<div className="bg-black border-b border-border/50 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
  {/* Traffic Lights */}
  <div className="flex gap-1 sm:gap-1.5 md:gap-2">
    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-destructive"></div>
    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-primary"></div>
  </div>
  {/* URL Bar */}
  <div className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4">
    <div className="flex-1 max-w-2xl bg-secondary rounded-lg px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs text-muted-foreground truncate">
      https://example.com/page
    </div>
  </div>
</div>
```

**Responsive Breakpoints:**
- Mobil: `w-2 h-2`, `px-2`, `text-[10px]`
- Tablet: `sm:w-2.5 sm:h-2.5`, `sm:px-3`, `sm:text-xs`
- Desktop: `md:w-3 md:h-3`, `md:px-4`, `md:text-xs`

---

## 2. Code Editor Mockup (Hero Component)

**Özellikler:**
- VS Code benzeri görünüm
- Sidebar (Explorer)
- Tabs
- Code editor area
- Terminal
- Status bar

**Ana Yapı:**
```tsx
<div className="bg-black rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden flex-1 flex flex-col group border border-border/50 shadow-2xl min-h-0">
  {/* Window Header */}
  <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 border-b border-border/50 bg-card">
    {/* Traffic lights + Branch info + Port */}
  </div>
  
  {/* Editor Content */}
  <div className="flex-1 flex overflow-hidden">
    {/* Sidebar - hidden md:flex */}
    <div className="hidden md:flex w-48 border-r border-border/50 bg-secondary">
      {/* Explorer */}
    </div>
    
    {/* Main Editor */}
    <div className="flex-1 flex flex-col">
      {/* Tabs */}
      {/* Code Content */}
      {/* Terminal */}
      {/* Status Bar */}
    </div>
  </div>
</div>
```

**Sidebar Pattern:**
```tsx
<div className="hidden md:flex w-48 border-r border-border/50 bg-secondary flex flex-col py-4 min-w-[180px]">
  <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
    Explorer
  </div>
  <div className="flex-1 px-2 space-y-1 overflow-y-auto custom-scrollbar">
    {/* File items */}
  </div>
</div>
```

**Code Line Pattern:**
```tsx
<div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 group hover:bg-primary/5 transition-colors rounded px-1 sm:px-1.5 md:px-2 -mx-1 sm:-mx-1.5 md:-mx-2">
  <div className="text-muted-foreground/60 select-none w-6 sm:w-7 md:w-8 lg:w-10 text-right font-normal text-[9px] sm:text-[10px] md:text-xs">
    1
  </div>
  <div className="flex-1 break-words">
    {/* Code content */}
  </div>
</div>
```

---

## 3. Network Graph Mockup (TargetAudience Component)

**Özellikler:**
- Interactive network visualization
- SVG connection lines
- Animated nodes
- Sidebar with info panels
- Particle effects

**Ana Yapı:**
```tsx
<div className="bg-black rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-border/50 shadow-2xl flex-1 flex flex-col min-h-0">
  {/* Browser Header */}
  
  {/* Dashboard Header */}
  <div className="bg-card border-b border-border/50 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 flex items-center justify-between flex-shrink-0 flex-wrap gap-2 sm:gap-0">
    {/* Title + Stats */}
  </div>
  
  {/* Main Content */}
  <div className="flex-1 flex overflow-hidden min-h-0">
    {/* Left Sidebar - hidden md:flex */}
    <div className="hidden md:flex w-80 border-r border-border/50 bg-secondary">
      {/* Info panels */}
    </div>
    
    {/* Network Canvas */}
    <div className="flex-1 flex flex-col overflow-hidden bg-gradient-to-br from-black via-secondary/5 to-black relative">
      {/* Animated Particles */}
      {/* SVG Connection Lines */}
      {/* Network Nodes */}
      {/* Selected Details Panel */}
    </div>
  </div>
</div>
```

**SVG Connection Pattern:**
```tsx
<svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
  {nodes.map((node, idx) =>
    node.connections.map((targetIdx) => {
      const source = node.position
      const target = nodes[targetIdx].position
      const isActive = selectedNode === idx || hoveredNode === idx
      return (
        <line
          key={`${idx}-${targetIdx}`}
          x1={source.x}
          y1={source.y}
          x2={target.x}
          y2={target.y}
          stroke={isActive ? "rgba(26, 136, 109, 0.5)" : "rgba(255, 255, 255, 0.15)"}
          strokeWidth={isActive ? "0.3" : "0.2"}
          className="transition-all duration-500"
        />
      )
    })
  )}
</svg>
```

**Node Pattern:**
```tsx
<div
  className="absolute transition-all duration-300 cursor-pointer group z-10"
  style={{
    left: `${node.position.x}%`,
    top: `${node.position.y}%`,
    transform: `translate(-50%, -50%) scale(${scale})`,
  }}
>
  {/* Glow Ring */}
  {/* Node Circle */}
  {/* Percentage Badge */}
  {/* Node Label */}
</div>
```

---

## 4. Timeline Comparison Mockup (Differentiation Component)

**Özellikler:**
- Side-by-side timeline comparison
- Responsive timeline bars
- Comparison stats

**Ana Yapı:**
```tsx
<div className="bg-black rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-border/50 shadow-2xl flex-1 flex flex-col min-h-0">
  {/* Browser Header */}
  
  {/* Header */}
  <div className="bg-card border-b border-border/50 p-3 sm:p-4 md:p-5 flex-shrink-0">
    {/* Title + View selector */}
  </div>
  
  {/* Timeline Content */}
  <div className="flex-1 overflow-auto min-h-0 p-3 sm:p-4 md:p-6">
    {/* Traditional Timeline */}
    {/* My Timeline */}
    {/* Comparison Stats */}
  </div>
  
  {/* Footer CTA */}
</div>
```

**Timeline Bar Pattern:**
```tsx
<div className="relative">
  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-destructive/10"></div>
  <div className="relative flex gap-1 sm:gap-1.5 md:gap-2 overflow-x-auto sm:overflow-x-visible custom-scrollbar pb-2 sm:pb-0">
    {phases.map((phase, idx) => (
      <div
        key={idx}
        className={`${phase.color} border-2 ${phase.border} rounded-lg p-2 sm:p-2.5 md:p-3 relative flex-shrink-0 sm:flex-shrink`}
        style={{ minWidth: "80px" }}
        data-duration={phase.duration}
      >
        {/* Phase content */}
      </div>
    ))}
  </div>
</div>
```

**CSS for Timeline Flex (globals.css):**
```css
@media (min-width: 640px) {
  [data-duration="1"] { flex: 1; }
  [data-duration="2"] { flex: 2; }
  [data-duration="3"] { flex: 3; }
  [data-duration="4"] { flex: 4; }
  [data-duration="8"] { flex: 8; }
}
```

---

## 5. Invoice Generator Mockup (Pricing Component)

**Özellikler:**
- Left sidebar for plan selection
- Main invoice area
- Professional invoice document

**Ana Yapı:**
```tsx
<div className="bg-black rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-border/50 shadow-2xl flex-1 flex flex-col min-h-0">
  {/* Browser Header */}
  
  {/* Invoice Header */}
  <div className="bg-card border-b border-border/50 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 flex items-center justify-between flex-shrink-0 flex-wrap gap-2 sm:gap-0">
    {/* Title + Actions */}
  </div>
  
  {/* Main Content */}
  <div className="flex-1 flex overflow-hidden min-h-0 flex-col md:flex-row">
    {/* Left Sidebar - Plan Selector */}
    <div className="w-full md:w-80 border-r-0 md:border-r border-border/50 border-b md:border-b-0 bg-secondary flex flex-col flex-shrink-0 max-h-[40vh] md:max-h-none overflow-auto">
      {/* Plan cards */}
      {/* Calculator controls */}
    </div>
    
    {/* Main Invoice Area */}
    <div className="flex-1 overflow-auto min-h-0 bg-secondary/30">
      {/* Invoice Document or Empty State */}
    </div>
  </div>
</div>
```

**Invoice Document Pattern:**
```tsx
<div className="bg-white border-2 border-gray-300 rounded-lg shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12">
  {/* Invoice Header */}
  {/* Bill To */}
  {/* Invoice Items Table */}
  {/* Invoice Totals */}
  {/* Invoice Footer */}
</div>
```

---

## 6. Terminal/CLI Mockup (Capabilities Component)

**Özellikler:**
- Terminal window
- Sidebar with categories
- Terminal output area
- Command execution simulation

**Ana Yapı:**
```tsx
<div className="bg-black rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-border/50 shadow-2xl flex-1 flex flex-col min-h-0">
  {/* Terminal Header */}
  <div className="bg-card border-b border-border/50 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 flex items-center gap-1.5 sm:gap-2 md:gap-3 flex-shrink-0">
    {/* Traffic lights + CLI info */}
  </div>
  
  {/* Main Content */}
  <div className="flex-1 flex overflow-hidden min-h-0 flex-col md:flex-row">
    {/* Sidebar - Categories */}
    <div className="w-full md:w-64 border-r-0 md:border-r border-border/50 border-b md:border-b-0 bg-secondary flex flex-col flex-shrink-0 max-h-[30vh] md:max-h-none overflow-auto">
      {/* Category buttons */}
    </div>
    
    {/* Terminal Output Area */}
    <div className="flex-1 flex flex-col overflow-hidden bg-black">
      {/* Terminal Toolbar */}
      {/* Terminal Content */}
      {/* Terminal Footer */}
    </div>
  </div>
</div>
```

**Terminal Command Pattern:**
```tsx
<div className="flex items-center gap-1.5 sm:gap-2 text-primary/80">
  <span className="text-primary">$</span>
  <span className="break-all">command-name --option</span>
</div>
```

**Terminal Output Pattern:**
```tsx
<div className="bg-secondary/50 border border-border/30 rounded-lg p-3 sm:p-4 space-y-3 sm:space-y-4">
  {/* Info sections */}
  {/* Command blocks */}
  {/* Progress indicators */}
</div>
```

---

## 7. Chatbot Mockup (FAQ Component)

**Özellikler:**
- Chat interface
- Message bubbles
- Typing indicator
- Quick replies
- Auto-scroll

**Ana Yapı:**
```tsx
<div className="bg-black rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-border/50 shadow-2xl flex-1 flex flex-col min-h-0 overflow-hidden">
  {/* Browser Header */}
  
  {/* Chat Header */}
  <div className="bg-black border-b border-border/50 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 flex items-center justify-between flex-shrink-0">
    {/* Bot avatar + title */}
  </div>
  
  {/* Chat Messages */}
  <div className="flex-1 overflow-y-auto min-h-0 p-4 sm:p-6" ref={messagesContainerRef}>
    {/* Messages */}
    {/* Typing indicator */}
  </div>
  
  {/* Input Area */}
  <div className="border-t border-border/50 p-3 sm:p-4 bg-black flex-shrink-0">
    {/* Input field + Send button */}
  </div>
</div>
```

**Message Bubble Pattern:**
```tsx
<div className={`flex gap-3 mb-4 ${isBot ? 'justify-start' : 'justify-end'}`}>
  {isBot && (
    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
      <Bot className="w-4 h-4 text-primary" />
    </div>
  )}
  <div className={`max-w-[80%] rounded-lg p-3 sm:p-4 ${isBot ? 'bg-secondary' : 'bg-primary'}`}>
    {/* Message content */}
  </div>
</div>
```

---

## 8. Calendar Booking Mockup (FinalCTA Component)

**Özellikler:**
- Calendly-style booking
- Calendar view
- Time selection
- Form steps
- Layered panels

**Ana Yapı:**
```tsx
<div className="bg-secondary rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-border shadow-2xl flex-1 flex flex-col min-h-0">
  {/* Browser Header */}
  
  {/* Main Content */}
  <div className="flex-1 flex overflow-hidden min-h-0 bg-secondary relative">
    {/* Left Panel - Event Info (absolute) */}
    <div className="absolute left-0 top-0 bottom-0 w-96 border-r border-border bg-secondary/50 flex flex-col z-0 overflow-hidden">
      {/* Event details */}
    </div>
    
    {/* Right Panel - Calendar/Form (relative) */}
    <div className="flex-1 flex flex-col overflow-hidden bg-secondary relative z-10 ml-96">
      {/* Step Indicator */}
      {/* Calendar/Time/Form content */}
    </div>
  </div>
</div>
```

**Calendar Grid Pattern:**
```tsx
<div className="grid grid-cols-7 gap-1 sm:gap-2 mb-4">
  {/* Day headers */}
  {days.map((day, idx) => (
    <button
      key={idx}
      className={`aspect-square rounded-lg text-sm font-medium transition-all ${
        isSelected ? 'bg-primary text-background' : 
        isToday ? 'bg-primary/20 border-2 border-primary' : 
        'bg-secondary hover:bg-secondary/80'
      }`}
    >
      {day}
    </button>
  ))}
</div>
```

---

## 9. GitHub Workflow Mockup (ProcessTimeline Component)

**Özellikler:**
- Git graph visualization
- Branch visualization
- Commit nodes
- Timeline flow

**Ana Yapı:**
```tsx
<div className="bg-black rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-border/50 shadow-2xl flex-1 flex flex-col min-h-0">
  {/* Browser Header */}
  
  {/* GitHub Header */}
  <div className="bg-black border-b border-border/50 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 flex items-center justify-between flex-shrink-0">
    {/* Title + Branch info */}
  </div>
  
  {/* Git Graph */}
  <div className="flex-1 overflow-auto min-h-0 p-3 sm:p-4 md:p-6 lg:p-8">
    {/* Timeline visualization */}
  </div>
</div>
```

---

## 10. Case Study Mockup (CaseStudy Component)

**Özellikler:**
- Browser iframe mockup
- Project showcase

**Ana Yapı:**
```tsx
<div className="bg-black rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-border/50 shadow-2xl flex-1 flex flex-col min-h-0">
  {/* Browser Header */}
  
  {/* Iframe Content Area */}
  <div className="flex-1 overflow-hidden bg-background">
    {/* Project showcase content */}
  </div>
</div>
```

---

## Ortak Pattern'ler

### Responsive Padding
```tsx
px-2 sm:px-4 md:px-6 lg:px-8
py-2 sm:py-4
```

### Responsive Border Radius
```tsx
rounded-lg sm:rounded-xl md:rounded-2xl
```

### Responsive Font Sizes
```tsx
text-[10px] sm:text-xs md:text-sm lg:text-base
```

### Responsive Icon Sizes
```tsx
w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3
```

### Responsive Gaps
```tsx
gap-1 sm:gap-1.5 md:gap-2 lg:gap-3
```

### Sidebar Pattern (Mobilde gizli)
```tsx
<div className="hidden md:flex w-80 border-r border-border/50 bg-secondary">
  {/* Sidebar content */}
</div>
```

### Sidebar Pattern (Mobilde üstte)
```tsx
<div className="w-full md:w-80 border-r-0 md:border-r border-border/50 border-b md:border-b-0 bg-secondary flex flex-col flex-shrink-0 max-h-[40vh] md:max-h-none overflow-auto">
  {/* Sidebar content */}
</div>
```

---

## CSS Utilities (globals.css)

### Custom Scrollbar
```css
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: var(--border);
  border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: var(--primary);
}
```

### Timeline Flex Values
```css
@media (min-width: 640px) {
  [data-duration="1"] { flex: 1; }
  [data-duration="2"] { flex: 2; }
  [data-duration="3"] { flex: 3; }
  [data-duration="4"] { flex: 4; }
  [data-duration="8"] { flex: 8; }
}
```

---

## Kullanım Notları

1. **Hydration Hatası Önleme:**
   - `window` kontrolünü render sırasında kullanma
   - `useEffect` içinde client-side kontrolleri yap
   - CSS media query kullan (timeline flex gibi)

2. **Responsive Design:**
   - Mobil-first yaklaşım
   - `hidden md:flex` ile sidebar'ları gizle
   - `flex-col md:flex-row` ile layout değiştir

3. **Performance:**
   - `overflow-hidden` ve `min-h-0` kullan
   - `flex-shrink-0` ile sabit boyutlu elementler
   - `custom-scrollbar` ile özel scrollbar

4. **Accessibility:**
   - `pointer-events-none` ile overlay elementler
   - Proper semantic HTML
   - Keyboard navigation desteği

---

## Component Listesi

1. **Hero** - Code Editor Mockup
2. **TargetAudience** - Network Graph Mockup
3. **Differentiation** - Timeline Comparison Mockup
4. **CaseStudy** - Browser Iframe Mockup
5. **Pricing** - Invoice Generator Mockup
6. **Capabilities** - Terminal/CLI Mockup
7. **ProcessTimeline** - GitHub Workflow Mockup
8. **FAQ** - Chatbot Mockup
9. **FinalCTA** - Calendar Booking Mockup

---

## Renk Paleti

- **Background**: `#0f1117` (koyu gri-mavi)
- **Card/Secondary**: `#000000` (siyah)
- **Border**: `#000000` (siyah)
- **Primary**: `#1a886d` (teal/yeşil)
- **Foreground**: `#ffffff` (beyaz)
- **Muted Foreground**: `#a0a0a0` (gri)

---

## Responsive Breakpoints

- **Mobil**: `< 640px` (default)
- **Tablet**: `sm: 640px+`
- **Desktop**: `md: 768px+`
- **Large**: `lg: 1024px+`
- **XL**: `xl: 1280px+`

---

Bu dosya, tüm mock component pattern'lerini içerir ve başka projelerde referans olarak kullanılabilir.

