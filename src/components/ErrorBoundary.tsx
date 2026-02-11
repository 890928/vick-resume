'use client';

import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="border border-card-border rounded-lg bg-card-bg p-6 text-center">
            <p className="text-text-muted text-sm">
              <span className="text-red-400">Error:</span> Something went wrong
              rendering this section.
            </p>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
