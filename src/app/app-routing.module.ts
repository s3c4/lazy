import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlMatchResult, UrlSegment } from '@angular/router';

function matcherCheck(segments: UrlSegment[], paths: string[]): UrlMatchResult | null {
  return segments.length == 0 || (segments.length == 1 && paths.includes(segments[0]?.path))
  ? { consumed: segments }
  : null;
}

const routes: Routes = [
  { 
    matcher: (segments: UrlSegment[]) => matcherCheck(segments, ['', 'dashboard', 'bord']),
    loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    matcher: (segments: UrlSegment[]) => matcherCheck(segments, ['user', 'utilizator']),
    loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)},
  { 
    matcher: (segments: UrlSegment[]) => matcherCheck(segments, ['rights', 'drepturi']),
    loadChildren: () => import('./components/rights/rights.module').then(m => m.RightsModule)
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
