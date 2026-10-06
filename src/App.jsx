import { useState } from 'react';
import Box from '@cloudscape-design/components/box';
import Button from '@cloudscape-design/components/button';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Link from '@cloudscape-design/components/link';
import ExpandableSection from '@cloudscape-design/components/expandable-section';
import KeyValuePairs from '@cloudscape-design/components/key-value-pairs';
import CopyToClipboard from '@cloudscape-design/components/copy-to-clipboard';
import './styles.css';

// Example values only: a real page would fill these from the failed request.
const REFERENCE = 'SB-7Q2K-91XD';
const OCCURRED = '5 Oct 2026, 08:56 CEST';

export default function App() {
  const [notice, setNotice] = useState(true);

  return (
    <div className="shell">
      <header className="topbar">
        <span className="brand">Skill Builder</span>
        <nav className="utils" aria-label="Utilities">
          <button className="item hide-sm" type="button">English ▾</button>
          <span className="divider hide-sm" />
          <button className="item hide-sm" type="button">Support ▾</button>
          <span className="divider hide-sm" />
          <button className="item" type="button">Sign in</button>
          <button className="cta" type="button">Create free account</button>
        </nav>
      </header>

      <main className="main">
        <div className="inner">
          {notice && (
            <div className="notice">
              <div className="banner" role="status">
                <span className="info" aria-hidden="true">i</span>
                <p>Unofficial redesign concept by a student, built with the open-source Cloudscape Design System. Buttons are inactive.</p>
                <button className="close" type="button" aria-label="Dismiss" onClick={() => setNotice(false)}>×</button>
              </div>
            </div>
          )}

          <div className="card-wrap">
            <section className="card" aria-labelledby="err-title">
              <h1 id="err-title" className="title">We couldn't sign you in</h1>
              <p className="lede">
                Your sign-in didn't finish. This can happen when a sign-in link expires or you switch accounts partway
                through. Try again, or go back to where you were.
              </p>

              <SpaceBetween size="l">
                <SpaceBetween direction="horizontal" size="s">
                  <Button variant="primary">Try signing in again</Button>
                  <Button>Back to Skill Builder</Button>
                </SpaceBetween>

                <Box variant="p">
                  Still stuck?{' '}
                  <Link external href="#" onFollow={(e) => e.preventDefault()}>
                    Contact AWS Support
                  </Link>{' '}
                  and include the reference below.
                </Box>

                <ExpandableSection headerText="Details for Support">
                  <KeyValuePairs
                    columns={2}
                    items={[
                      {
                        label: 'Reference',
                        value: (
                          <CopyToClipboard
                            variant="inline"
                            textToCopy={REFERENCE}
                            copyButtonAriaLabel="Copy reference"
                            copySuccessText="Reference copied"
                            copyErrorText="Couldn't copy"
                          />
                        ),
                      },
                      { label: 'Time', value: OCCURRED },
                    ]}
                  />
                </ExpandableSection>
              </SpaceBetween>
            </section>
          </div>
        </div>
      </main>

      <footer className="footer">
        <a href="#" onClick={(e) => e.preventDefault()}>Submit feedback</a>
        <nav aria-label="Legal">
          <a href="#" onClick={(e) => e.preventDefault()}>Privacy</a>
          <a href="#" onClick={(e) => e.preventDefault()}>Site terms</a>
          <a href="#" onClick={(e) => e.preventDefault()}>Cookie notice</a>
        </nav>
      </footer>
    </div>
  );
}
