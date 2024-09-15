<template>
  <div>
    <nav>
      <RouterLink to="/gamePage"
        ><img alt="SIgame logo" class="logo" src="@/assets/logo.png" width="125" height="125"
      /></RouterLink>
    </nav>
    {{ $route.query.questionText }}
  </div>
</template>
