import React from 'react'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F1EFF9' }}>
      {/* Header */}
      <header className="w-full px-6 py-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-black hover:text-purple-600 transition-colors">
            <span className="text-xl">←</span>
            <span className="font-bold">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="px-6 py-12 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-black text-black mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Our Privacy Promise</h2>
              <p className="text-gray-700 leading-relaxed">
                At ScholarFlow, we believe your privacy is fundamental. As a local-first application, 
                we've designed our entire system around protecting your data and giving you complete control.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">What Data We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Local Data Only</h3>
                  <p className="text-gray-700">
                    All your tasks, schedules, notes, and personal information are stored locally on your device. 
                    We do not collect, store, or transmit any of your personal data to our servers.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Optional Analytics</h3>
                  <p className="text-gray-700">
                    The only data we might collect is completely anonymous usage analytics (if you opt-in) 
                    to improve the app. This cannot be traced back to you personally.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">How Your Data Is Protected</h2>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li><strong>Local Storage:</strong> Your data never leaves your device</li>
                <li><strong>No Cloud Sync:</strong> We don't use cloud servers for your personal data</li>
                <li><strong>No Tracking:</strong> We don't track your behavior or sell your information</li>
                <li><strong>Encryption:</strong> Local data is encrypted on supported devices</li>
                <li><strong>No Third Parties:</strong> We don't share your data with anyone</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Your Rights</h2>
              <div className="space-y-3 text-gray-700">
                <p><strong>Complete Control:</strong> You have full control over your data</p>
                <p><strong>Data Export:</strong> Export your data at any time</p>
                <p><strong>Data Deletion:</strong> Delete your data permanently with one tap</p>
                <p><strong>No Lock-in:</strong> Your data is yours, even if you stop using ScholarFlow</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">What We Don't Do</h2>
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded">
                <ul className="space-y-2 text-gray-700">
                  <li>❌ We don't sell your data</li>
                  <li>❌ We don't show ads</li>
                  <li>❌ We don't track you across apps</li>
                  <li>❌ We don't require account creation</li>
                  <li>❌ We don't force cloud storage</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Changes to This Policy</h2>
              <p className="text-gray-700">
                If we update this privacy policy, we'll notify you in the app and post the changes here. 
                Any changes will be effective immediately upon posting.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have questions about this privacy policy or how we handle your data, 
                please reach out to us at privacy@scholarflow.app
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
