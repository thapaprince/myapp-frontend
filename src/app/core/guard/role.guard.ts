import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from '../services/user.service';

export const roleGuard: CanActivateFn = (route: any, state) => {
  const userService = inject(UserService);

  const user = userService.getSelectedUser();

  const allRouteRoles = route.data.roles;
  console.log("user...",user);
  if (user && allRouteRoles.includes(user.role)) {
  console.log("permission allowed");
  return true;
}
  else {
    console.log("permission not allowed");
    return false;
  }
};
