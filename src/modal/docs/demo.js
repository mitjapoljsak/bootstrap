angular.module('ui.bootstrap.demo').controller('ModalDemoCtrl', function ($scope, $uiModal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.open = function (size) {

    var modalInstance = $uiModal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
});

// Please note that $uiModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uiModal service used above.

angular.module('ui.bootstrap.demo').controller('ModalInstanceCtrl', function ($scope, $uiModalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $uiModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uiModalInstance.dismiss('cancel');
  };
});
