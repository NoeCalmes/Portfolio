<!-- header debut -->
<div class="header">
    <div class="left">
        <a class="title-principal" href="<?= base_url(); ?>">
            <p>Noé <span>Calmes</span> </p>
        </a>
    </div>

    <div class="right">
        <!-- Bouton de bascule de langue -->
        <button class="toggleLanguage" id="toggle-language">
            <img src="<?= base_url('public/img/langue/anglais.png'); ?>" alt="">
        </button>

        <!-- Bouton de bascule du mode sombre -->
        <div class="dark-mode-toggle-wrapper">
            <button class="btn-toggle" id="toggle-dark-mode">
                <img src="<?= base_url('public/img/mode-sombre/Vector.svg'); ?>" alt="">
            </button>
        </div>
    </div>


</div>
<!-- header fin -->



<!-- navbar début -->
<nav>
    <div class="container">
        <ul class="dispo">
            <li class="card">
                <a <?= ($activePage === 'index') ? 'class="active"' : ''; ?> href="<?= base_url(''); ?>">
                    <img class="home"
                        src="<?= base_url('public/img/nav/') . (($activePage === 'index') ? 'home_active.svg' : 'home.svg'); ?>"
                        alt="">
                    <p class="fr">Accueil</p>
                    <p class="en" style="display:none;">Home</p>
                </a>
            </li>
            <li class="card">
                <a <?= ($activePage === 'resume') ? 'class="active"' : ''; ?> href="<?= base_url('resume'); ?>">
                    <img class="resume"
                        src="<?= base_url('public/img/nav/') . (($activePage === 'resume') ? 'resume_active.svg' : 'resume.svg'); ?>"
                        alt="">
                    <p class="fr">Parcours</p>
                    <p class="en" style="display:none;">Resume</p>
                </a>
            </li>
            <li class="card">
                <a <?= ($activePage === 'skill') ? 'class="active"' : ''; ?> href="<?= base_url('skill'); ?>">
                    <img class="contact"
                        src="<?= base_url('public/img/nav/') . (($activePage === 'skill') ? 'skill_active.svg' : 'skill.svg'); ?>"
                        alt="">
                    <p class="fr">Compétence</p>
                    <p class="en" style="display:none;">Skill</p>
                </a>
            </li>
            <li class="card">
                <a <?= ($activePage === 'work') ? 'class="active"' : ''; ?> href="<?= base_url('experience'); ?>">
                    <img class="work"
                        src="<?= base_url('public/img/nav/') . (($activePage === 'work') ? 'work_active.svg' : 'work.svg'); ?>"
                        alt="">
                    <p class="fr">Expérience</p>
                    <p class="en" style="display:none;">Experience</p>
                </a>
            </li>
        </ul>
    </div>
</nav>
<!-- navbar fin -->