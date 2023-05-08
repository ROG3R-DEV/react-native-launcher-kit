import type { BatteryStatus } from './battery';

export interface LauncherKitHelperProps {
  launchApplication(bundleId: string): Promise<void>;
  launchApp(bundleId: string): Promise<void>;
  startActivity(config: {
    action: string;
    package: string;
    value: string;
  }): Promise<void>;
  goToSettings(): void;
  checkIfPackageInstalled(bundleId: string): Promise<boolean>;
  getDefaultLauncherPackageName(): Promise<string>;
  openAlarmApp(): void;
  getBatteryStatus(): Promise<BatteryStatus>;
  openSetDefaultLauncher(): Promise<boolean>;
}
