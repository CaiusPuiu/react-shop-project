import React from 'react';
import Layout from '../../components/layout/Layout';

function TermsAndConditions() {
    return(
        <div>
            <Layout>
                <h1>Termeni si conditii</h1>
                    <dl class="row m-1">
                        <dt class="col-sm-3">Descriere</dt>
                        <dd class="col-sm-9">A description list is perfect for defining terms.</dd>

                        <dt class="col-sm-3">Euismod</dt>
                        <dd class="col-sm-9">
                            <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
                            <p>Donec id elit non mi porta gravida at eget metus.</p>
                        </dd>

                        <dt class="col-sm-3">Malesuada porta</dt>
                        <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

                        <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
                        <dd class="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

                        <dd class="col-sm-9">
                            <dl class="row">
                            <dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
                        </dl>
                        </dd>
                    </dl>
                

            </Layout>
        </div>
    );
}

export default TermsAndConditions;