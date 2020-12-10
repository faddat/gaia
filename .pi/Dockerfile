FROM faddat/sos-full

ENV GOPATH=/root/go
ENV PATH=$PATH:/root/go/bin

RUN pacman -Syyu --noconfirm go && \
      curl -sSfL https://raw.githubusercontent.com/golangci/golangci-lint/master/install.sh | sh -s -- -b $(go env GOPATH)/bin v1.31.0 && \
      echo "gaia" > /etc/hostname && \
      git clone https://github.com/cosmos/gaia && \
      make && \
      make install && \
      mv $(which gaiad) /usr/bin && \
      mv $(which gaiacli) /usr/bin



