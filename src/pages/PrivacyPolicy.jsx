import React from 'react'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#09090F', color: '#F1F0FF' }}>

      <div className="px-6 py-20 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto bg-[linear-gradient(180deg,#0b0b0f,rgba(15,10,30,0.6))] rounded-2xl shadow-2xl p-8 md:p-12 border border-[rgba(255,255,255,0.04)]">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-6">
            Privacy Policy
          </h1>

          <p className="text-sm text-gray-400 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-3">Our Privacy Promise</h2>
              <p>
                At ScholarFlow, privacy is fundamental. As a local-first application, we've designed our
                system to keep your data on your device and give you full control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">What Data We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Local Data Only</h3>
                  <p className="text-gray-300">
                    Tasks, schedules, notes, and personal information are stored locally on your device. We do not
                    collect or transmit personal data to our servers by default.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Optional Analytics</h3>
                  <p className="text-gray-300">
                    We may collect anonymous, opt-in analytics to improve the app. These analytics cannot be
                    traced back to individual users.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">How Your Data Is Protected</h2>
              <ul className="list-disc list-inside space-y-3 text-gray-300">
                <li><strong>Local Storage:</strong> Your data never leaves your device</li>
                <li><strong>No Cloud Sync:</strong> We don't use cloud servers for your personal data</li>
                <li><strong>No Tracking:</strong> We don't track your behavior or sell your information</li>
                <li><strong>Encryption:</strong> Local data is encrypted on supported devices</li>
                <li><strong>No Third Parties:</strong> We don't share your data with anyone</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-white">Complete Control:</strong> You have full control over your data</p>
                <p><strong className="text-white">Data Export:</strong> Export your data at any time</p>
                <p><strong className="text-white">Data Deletion:</strong> Delete your data permanently with one tap</p>
                <p><strong className="text-white">No Lock-in:</strong> Your data is yours, even if you stop using ScholarFlow</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">What We Don't Do</h2>
              <div className="bg-[rgba(124,58,237,0.08)] border-l-4 border-purple-600 p-4 rounded">
                <ul className="space-y-2 text-gray-200">
                  <li>❌ We don't sell your data</li>
                  <li>❌ We don't show ads</li>
                  <li>❌ We don't track you across apps</li>
                  <li>❌ We don't require account creation</li>
                  <li>❌ We don't force cloud storage</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
              <p className="text-gray-300">
                If we update this privacy policy, we'll notify you in the app and post the changes here. 
                Any changes will be effective immediately upon posting.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300">
                If you have questions about this privacy policy or how we handle your data, 
                please reach out to us at <a href="mailto:privacy@scholarflow.app" className="text-purple-300">privacy@scholarflow.app</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
