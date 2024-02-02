import React from 'react';
import { Link } from 'react-router-dom';
import css from './home.module.css';

class Home extends React.Component {
  render() {
    return (
      <>
        <h2>NPM Library Demo</h2>

        <h3>Forms</h3>
        <p>
          The form components have a mock backend just for demonstration
          purposes. You can view the form states, try sample users to get server
          feedback, etc.
        </p>
        <p>
          <strong>
            <Link to="/login" className={css.package}>
              Login
            </Link>
          </strong>{' '}
          - customizable, responsive login component with server support that
          validates against a default or custom Zod schema. Peer deps:
          react-hook-form and zod.
        </p>

        <p>
          <strong>
            <Link to="/signup" className={css.package}>
              Signup
            </Link>
          </strong>{' '}
          - customizable, responsive signup component with server support that
          validates against a default or custom Zod schema. Peer deps:
          react-hook-form and zod.
        </p>
        <p>
          <strong>
            <Link to="/forgot-password" className={css.package}>
              Forgot password
            </Link>
          </strong>{' '}
          (includes forgot password reset) - customizable, responsive set of
          forgot password components with server support that validate against a
          default or custom Zod schema. Peer deps: react-hook-form and zod.
        </p>
        <p>
          <strong>
            <Link to="/quick-form" className={css.package}>
              Quick Form
            </Link>
          </strong>{' '}
          - form generator that can quickly produce simple React forms with
          validation and server support. By default, it is a Contact form. Peer
          deps: react-hook-form and zod.
        </p>

        <h3>UI Widgets</h3>
        <p>
          <strong>
            <Link to="/navigation" className={css.package}>
              Navigation
            </Link>
          </strong>{' '}
          - customizable, responsive navigation component. Supports auth states
          and comes with an optional sidecar component for login/logout/signup.
        </p>
        <p>
          <strong>
            <Link to="/pagination" className={css.package}>
              Pagination
            </Link>
          </strong>{' '}
          - sexy and responsive pagination component for React.
        </p>
        <p>
          <strong>
            <Link to="/modal" className={css.package}>
              Modal
            </Link>
          </strong>{' '}
          - customizable, responsive, portal free modal component. Optional
          animation state support when adding/removing from DOM.
        </p>

        <h3>Other</h3>
        <p>
          <strong>
            <Link to="/recursive-data-lister" className={css.package}>
              Recursive Data Lister
            </Link>
          </strong>{' '}
          - component that recursively pretty prints nested lists or objects
          with various options for html markup and styling.
        </p>
        <p>
          <strong>
            <Link to="/async-handler" className={css.package}>
              Async Handler
            </Link>
          </strong>{' '}
          (deprecated) - HOC that takes an async function and returns views for
          loading, no-data and error states. It accepts an optional method to
          check a cache before the async function is run.
          <em>
            {' '}
            This package has been deprecated and will be archived in the near
            future.{' '}
            <a
              href="https://github.com/TanStack/query"
              target="_blank"
              rel="noreferrer"
            >
              React Query
            </a>{' '}
            is a more feature rich implementation based on React hooks.
          </em>
        </p>
      </>
    );
  }
}

export default Home;
