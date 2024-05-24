<!-- work.php -->

<div class="article3">
    <div class="article-right">

        <div class="about">
            <h1 class="dark fr">Mes Projets</h1>
            <h1 class="dark en" style="display:none;">My Projects</h1>
            <div class="line-about"></div>
        </div>

        <div class="small-navbar">
            <ul>
                <li class="first rizoto fr">
                    <a href="<?= base_url('work'); ?>">Tout</a>
                </li>
                <li class="dark rizoto lop ris fr">
                    <a href="<?= base_url('work?category=web'); ?>">Projet Web</a>
                </li>
                <li class="dark rizoto fr">
                    <a href="<?= base_url('work?category=ecom'); ?>">Projet E-commerce</a>
                </li>
            </ul>
        </div>

        <div class="container" id="all-card">
            <!-- left card -->
            <div class="left-card">
                <?php if (isset($showAllCard) || isset($showWebCard)): ?>
                    <!-- Afficher les cartes pour 'all' ou 'web' -->
                    <div class="card1">
                        <!-- Contenu de la carte -->
                    </div>
                    <div class="card3">
                        <!-- Contenu de la carte -->
                    </div>
                <?php endif; ?>

                <?php if (isset($showAllCard) || isset($showCmsCard)): ?>
                    <!-- Afficher les cartes pour 'all' ou 'ecom' -->
                    <div class="card2">
                        <!-- Contenu de la carte -->
                    </div>
                <?php endif; ?>
            </div>

            <!-- right card -->
            <div class="right-card">
                <?php if (isset($showAllCard) || isset($showWebCard)): ?>
                    <!-- Afficher les cartes pour 'all' ou 'web' -->
                    <div class="cardone">
                        <!-- Contenu de la carte -->
                    </div>
                <?php endif; ?>

                <?php if (isset($showAllCard) || isset($showAppCard)): ?>
                    <!-- Afficher les cartes pour 'all' ou 'stage' -->
                    <div class="cardtwo">
                        <!-- Contenu de la carte -->
                    </div>
                <?php endif; ?>
            </div>
        </div>

    </div>
</div>