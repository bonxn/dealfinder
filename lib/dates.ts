export function calculateDiscountRate(baselinePrice: number, dealPrice: number): number {
  if (baselinePrice <= 0) return 0
  return Math.round(((baselinePrice - dealPrice) / baselinePrice) * 100)
}

export function getTimeRemaining(targetDate: Date): string {
  const now = new Date()
  const diff = targetDate.getTime() - now.getTime()
  if (diff <= 0) return '종료됨'
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  if (days > 0) return `${days}일 ${hours}시간 남음`
  return `${hours}시간 남음`
}
```

4. **Commit changes**

---

## 🎯 최종 lib 폴더 구조
```
lib/
└── dates.ts  ← 이것만 있어야 함!
