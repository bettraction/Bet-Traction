import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@bettraction/ui';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className="text-xl font-bold text-gray-900">BetTraction Admin</span>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Total Users</CardTitle>
              <CardDescription>0</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Total Bets</CardTitle>
              <CardDescription>0</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pending Deposits</CardTitle>
              <CardDescription>0</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pending Payouts</CardTitle>
              <CardDescription>0</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default App;
