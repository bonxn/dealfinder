export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">🎉 DealFinder</h1>
        <p className="text-2xl text-gray-600 mb-8">
          인플루언서 공동구매 딜 추적 플랫폼
        </p>
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">환영합니다!</h2>
          <p className="text-gray-600 mb-6">
            데이터베이스 연결 후 딜 정보가 표시됩니다.
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-blue-50 p-4 rounded">
              <div className="text-3xl mb-2">🔥</div>
              <div className="font-bold">TOP 10</div>
            </div>
            <div className="bg-orange-50 p-4 rounded">
              <div className="text-3xl mb-2">⏰</div>
              <div className="font-bold">마감 임박</div>
            </div>
            <div className="bg-purple-50 p-4 rounded">
              <div className="text-3xl mb-2">💎</div>
              <div className="font-bold">맞춤 추천</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
