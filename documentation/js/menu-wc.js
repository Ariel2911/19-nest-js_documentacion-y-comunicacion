'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">19-nest-js_documentacion-y-comunicacion documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-ca124c3380ae40ba14601e5d3f6abd46df3bd7c3bc3697aa72c91d3f0c92f6ce216b2b7a0cb391912757789f2a692fa5267e8499df7944435ac5ebd54b15ac6e"' : 'data-bs-target="#xs-controllers-links-module-AppModule-ca124c3380ae40ba14601e5d3f6abd46df3bd7c3bc3697aa72c91d3f0c92f6ce216b2b7a0cb391912757789f2a692fa5267e8499df7944435ac5ebd54b15ac6e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-ca124c3380ae40ba14601e5d3f6abd46df3bd7c3bc3697aa72c91d3f0c92f6ce216b2b7a0cb391912757789f2a692fa5267e8499df7944435ac5ebd54b15ac6e"' :
                                            'id="xs-controllers-links-module-AppModule-ca124c3380ae40ba14601e5d3f6abd46df3bd7c3bc3697aa72c91d3f0c92f6ce216b2b7a0cb391912757789f2a692fa5267e8499df7944435ac5ebd54b15ac6e"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-ca124c3380ae40ba14601e5d3f6abd46df3bd7c3bc3697aa72c91d3f0c92f6ce216b2b7a0cb391912757789f2a692fa5267e8499df7944435ac5ebd54b15ac6e"' : 'data-bs-target="#xs-injectables-links-module-AppModule-ca124c3380ae40ba14601e5d3f6abd46df3bd7c3bc3697aa72c91d3f0c92f6ce216b2b7a0cb391912757789f2a692fa5267e8499df7944435ac5ebd54b15ac6e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-ca124c3380ae40ba14601e5d3f6abd46df3bd7c3bc3697aa72c91d3f0c92f6ce216b2b7a0cb391912757789f2a692fa5267e8499df7944435ac5ebd54b15ac6e"' :
                                        'id="xs-injectables-links-module-AppModule-ca124c3380ae40ba14601e5d3f6abd46df3bd7c3bc3697aa72c91d3f0c92f6ce216b2b7a0cb391912757789f2a692fa5267e8499df7944435ac5ebd54b15ac6e"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsModule.html" data-type="entity-link" >ProductsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProductsModule-981b5baa1439991e4ad397355524816a1a3ba1bcac569f04e0e2c6bb2ec2daba596cf60e6c7373e645e81a58b1866535d10e102e474de6a2a4645549e35900c3"' : 'data-bs-target="#xs-controllers-links-module-ProductsModule-981b5baa1439991e4ad397355524816a1a3ba1bcac569f04e0e2c6bb2ec2daba596cf60e6c7373e645e81a58b1866535d10e102e474de6a2a4645549e35900c3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductsModule-981b5baa1439991e4ad397355524816a1a3ba1bcac569f04e0e2c6bb2ec2daba596cf60e6c7373e645e81a58b1866535d10e102e474de6a2a4645549e35900c3"' :
                                            'id="xs-controllers-links-module-ProductsModule-981b5baa1439991e4ad397355524816a1a3ba1bcac569f04e0e2c6bb2ec2daba596cf60e6c7373e645e81a58b1866535d10e102e474de6a2a4645549e35900c3"' }>
                                            <li class="link">
                                                <a href="controllers/ProductsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProductsModule-981b5baa1439991e4ad397355524816a1a3ba1bcac569f04e0e2c6bb2ec2daba596cf60e6c7373e645e81a58b1866535d10e102e474de6a2a4645549e35900c3"' : 'data-bs-target="#xs-injectables-links-module-ProductsModule-981b5baa1439991e4ad397355524816a1a3ba1bcac569f04e0e2c6bb2ec2daba596cf60e6c7373e645e81a58b1866535d10e102e474de6a2a4645549e35900c3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductsModule-981b5baa1439991e4ad397355524816a1a3ba1bcac569f04e0e2c6bb2ec2daba596cf60e6c7373e645e81a58b1866535d10e102e474de6a2a4645549e35900c3"' :
                                        'id="xs-injectables-links-module-ProductsModule-981b5baa1439991e4ad397355524816a1a3ba1bcac569f04e0e2c6bb2ec2daba596cf60e6c7373e645e81a58b1866535d10e102e474de6a2a4645549e35900c3"' }>
                                        <li class="link">
                                            <a href="injectables/ProductsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-26cd2c33479040f28d624c5429fb521c696d40bb7a4c5deca55d00329ee79d3f4c9dafda722908ea29e702edd07ce5baac2ca2d5c811090c800f43bdfdc047f8"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-26cd2c33479040f28d624c5429fb521c696d40bb7a4c5deca55d00329ee79d3f4c9dafda722908ea29e702edd07ce5baac2ca2d5c811090c800f43bdfdc047f8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-26cd2c33479040f28d624c5429fb521c696d40bb7a4c5deca55d00329ee79d3f4c9dafda722908ea29e702edd07ce5baac2ca2d5c811090c800f43bdfdc047f8"' :
                                            'id="xs-controllers-links-module-UsersModule-26cd2c33479040f28d624c5429fb521c696d40bb7a4c5deca55d00329ee79d3f4c9dafda722908ea29e702edd07ce5baac2ca2d5c811090c800f43bdfdc047f8"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-26cd2c33479040f28d624c5429fb521c696d40bb7a4c5deca55d00329ee79d3f4c9dafda722908ea29e702edd07ce5baac2ca2d5c811090c800f43bdfdc047f8"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-26cd2c33479040f28d624c5429fb521c696d40bb7a4c5deca55d00329ee79d3f4c9dafda722908ea29e702edd07ce5baac2ca2d5c811090c800f43bdfdc047f8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-26cd2c33479040f28d624c5429fb521c696d40bb7a4c5deca55d00329ee79d3f4c9dafda722908ea29e702edd07ce5baac2ca2d5c811090c800f43bdfdc047f8"' :
                                        'id="xs-injectables-links-module-UsersModule-26cd2c33479040f28d624c5429fb521c696d40bb7a4c5deca55d00329ee79d3f4c9dafda722908ea29e702edd07ce5baac2ca2d5c811090c800f43bdfdc047f8"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateProductDto.html" data-type="entity-link" >CreateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDto.html" data-type="entity-link" >UserDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});