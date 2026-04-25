const { createApp } = Vue;

createApp({
  data() {
    return {
      projects: [],
      categories: [],
      skills: null,
      activeCategory: 'All',
      active: null,
      loading: true,
      scrolled: false,
    };
  },

  computed: {
    filteredProjects() {
      if (this.activeCategory === 'All') return this.projects;
      return this.projects.filter(p => p.category === this.activeCategory);
    }
  },

  watch: {
    // Re-run reveal every time the filter changes
    activeCategory() {
      this.$nextTick(() => this.initReveal());
    }
  },

  methods: {
    async load() {
      try {
        const [pRes, cRes, sRes] = await Promise.all([
          fetch('/api/projects'),
          fetch('/api/categories'),
          fetch('/api/skills')
        ]);
        this.projects   = await pRes.json();
        this.categories = await cRes.json();
        this.skills     = await sRes.json();
      } catch (e) {
        console.error(e);
      } finally {
        this.loading = false;
        this.$nextTick(() => this.initReveal());
      }
    },

    open(project) {
      this.active = project;
      document.body.style.overflow = 'hidden';
    },

    close() {
      this.active = null;
      document.body.style.overflow = '';
    },

    initReveal() {
      // Immediately reveal already-visible items, then observe the rest
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.05 });

      document.querySelectorAll('.reveal-item:not(.revealed)').forEach(el => {
        io.observe(el);
      });
    },

    handleScroll() {
      this.scrolled = window.scrollY > 50;
    }
  },

  mounted() {
    this.load();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('keydown', e => { if (e.key === 'Escape') this.close(); });
  }
}).mount('#app');