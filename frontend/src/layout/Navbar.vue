<template>
    <nav class="bg-primary text-primary-light">
        <div class="mx-auto">
            <div class="flex justify-between items-center h-16">
                <!-- Branding -->
                <div class="text-2xl font-extrabold">TheaterKit</div>
                <!-- Desktop Navigation -->
                <div class="hidden sm:block">
                    <ul class="flex space-x-4">
                        <li>
                            <a
                                href="/"
                                class="rounded-md px-3 py-2 bg-surface text-primary-light hover:bg-accent transition-colors"
                                aria-current="page"
                            >
                                All Movies
                            </a>
                        </li>
                        <li>
                            <a
                                href="/about"
                                class="rounded-md px-3 py-2 text-primary-light hover:bg-accent transition-colors"
                            >
                                About
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- Mobile Menu -->
        <div class="sm:hidden" id="mobile-menu">
            <div class="space-y-1 px-2 pt-2 pb-3">
                <a
                    href="/"
                    class="block rounded-md bg-surface px-3 py-2 text-base font-medium text-primary-light"
                >
                    Dashboard
                </a>
                <!-- Additional mobile links... -->
            </div>
        </div>
    </nav>
</template>

<script setup>
// No additional logic needed for now.
</script>

<style scoped>
/* All colors via Tailwind theme classes */
</style>
