function RoleBasedRouting({
    component: Component, roles, ...rest
  }) {
    return (
      <>
        { grantPermission(roles) && (
        <Route
          {...rest}
          render={(props) => (
            <>
              <Component {...props} />
            </>
          )}
        />
        )}
        {
          !grantPermission(roles) && (
            <Route
              render={() => (
                <>
                  <Unauthorized /> // Unauthorized Page View (skippable)
                </>
              )}
            />
          )
        }
      </>
    );
  }